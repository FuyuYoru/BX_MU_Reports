export async function readJsonFile(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(`Error reading JSON file ${filePath}:`, error);
            throw error;
        });
}


export const getWorkPosition = async () => {
    try {
        const response = await BX.rest.callMethod('im.user.get', {});
        return response['answer']['result']['work_position'];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const getUsersByPosition = async (positionToSearch) => {
    try {
        const response = await BX.rest.callMethod('user.get', {
            filter: {'WORK_POSITION': positionToSearch},
        });
        return response['answer']['result'];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const getOneAssData = async (workPosition) => {
    const response = await getUsersByPosition(workPosition);
    const user = response[0];

    if (!user || !user['UF_USR_GUID'] || !user['UF_USR_STORAGES3']) {
        return null;
    }
    const storages = JSON.parse(user['UF_USR_STORAGES3']);
    const secondName = user['SECOND_NAME'] ? user['SECOND_NAME'] : ''
    if (workPosition.includes("ТП")) {
        const clients = await getUserClients(user['UF_USR_GUID']);
        return {
            'name': user['LAST_NAME'] + ' ' + user['NAME'] + ' ' + secondName + ', ' + workPosition,
            'guid': user['UF_USR_GUID'],
            'storages': storages,
            'clients': clients,
        };
    }
    return {
        'name': user['LAST_NAME'] + ' ' + user['NAME'] + ' ' + secondName + ', ' + workPosition,
        'guid': user['UF_USR_GUID'],
        'storages': storages,
    };
}

export const getHierarchy = async () => {
    return await readJsonFile('../../local/js/local/reports/src/data/workPositionsConfig.json');
}

export const getUserAttrs = async () => {
    const workPos = await getWorkPosition();
    const workPositionsJson = await readJsonFile('../../local/js/local/reports/src/data/workPositionsConfig.json');
    const subordinates = getSubordinates(workPositionsJson, workPos);
    if (!subordinates) {
        return null;
    }
    const userData = await getOneAssData(workPos);
    let userSubs = await getUserManagers(subordinates);
    if (!Array.isArray(userSubs)) {
        return {...userData, managers: [userSubs]};
    }
    return {...userData, managers: userSubs};
}

/**
 * Функция для поиска подчиненных объекта по ключу во вложенных объектах или массивах.
 * @param {object|array} obj - Исходный объект структуры должностей.
 * @param {string} target - Искомая должность.
 * @returns {any} Возвращается объект либо массив подчинённых. Если пользователь не обладает подчинёнными,
 * возвращается его должность. В случае, если должность отсутствует в структуре, возвращается null.
 */
export const getSubordinates = (obj, target) => {
    // Проверяем, является ли obj массивом
    if (obj && Array.isArray(obj)) {
        // Если obj - массив, проверяем наличие target в массиве
        const result = obj.includes(target) ? target : null;
        return result;
    }

    // Если obj не массив, проверяем, является ли obj объектом
    if (obj && typeof obj === 'object') {
        // Если obj - объект, проверяем наличие target в качестве ключа
        if (Object.keys(obj).includes(target)) {
            // Если target найден в качестве ключа, возвращаем соответствующее значение
            return obj[target];
        }

        // Если target не найден в качестве ключа, рекурсивно вызываем функцию для каждого элемента объекта
        for (const item in obj) {
            const result = getSubordinates(obj[item], target);
            // Если результат не null, возвращаем найденное значение
            if (result) {
                return result;
            }
        }
    }
    // Если target не найден, возвращаем null
    return null;
};

export const getSubordinates1 = (obj, target) => {
    if (obj && Array.isArray(obj)) {
        // Если obj - массив, проверяем наличие target в массиве
        return null
    }
    // Проверяем, является ли obj объектом
    if (obj && typeof obj === 'object') {
        // Если obj - объект, проверяем наличие target в качестве ключа
        if (Object.keys(obj).includes(target)) {
            // Если target найден в качестве ключа, возвращаем соответствующее значение
            return Array.isArray(obj[target]) ? obj[target] : Object.keys(obj[target]);
        }

        // Если target не найден в качестве ключа, рекурсивно вызываем функцию для каждого элемента объекта
        for (const item in obj) {
            const result = getSubordinates1(obj[item], target);
            // Если результат не null, возвращаем найденное значение
            if (result !== null) {
                return result;
            }
        }
    }
    // Если target не найден, возвращаем null
    return null;
};


export const getUserManagers = async (subsObj) => {
    if (typeof subsObj === 'string') {
        return await getOneAssData(subsObj);
    } else if (Array.isArray(subsObj)) {
        const result = [];
        for (const item of subsObj) {
            const userData = await getOneAssData(item);
            if (userData) {
                result.push(userData);
            }
        }
        return result;
    } else if (typeof subsObj === 'object') {
        const result = [];
        for (const item of Object.keys(subsObj)) {
            const tmpData = await getOneAssData(item);
            if (!tmpData) {
                continue
            }
            const userSubs = await getUserManagers(subsObj[item]);
            const userData = {...tmpData, managers: userSubs};
            result.push(userData);
        }
        return result
    }
    return null;
}

export const getUserClients = async (userGuid) => {
    try {
        const response = await fetch(`http://192.168.91.166/1cApi/getPartners/${userGuid}`, {
            method: 'GET',
        })
        const result = await response.json();
        if (result.body.length > 0) {
            return result.body
        }
        return [];
    } catch (error) {
        return null
    }
}