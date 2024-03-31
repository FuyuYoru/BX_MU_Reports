import {getOneAssData} from '../services/bitrixServices.js';

function findValue(obj, target) {
    if (obj && typeof obj === 'object') {

        if (target in obj) {
            return obj[target];
        }

        for (const key in obj) {
            const result = findValue(obj[key], target);
            if (result) {
                return result;
            }
        }
    }
    return null;
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

export const getUserSubsData = async (subsObj) => {
    if (typeof subsObj === 'string') {
        const result = await getOneAssData(subsObj);
        return result;
    } else if (Array.isArray(subsObj)) {
        const result = [];
        for (const item of subsObj) {
            const userData = await getOneAssData(item);
            if (userData){
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
            const userSubs = await getUserSubsData(subsObj[item]);
            const userData = {...tmpData, managers: userSubs};
            result.push(userData);
        }
        return result
    }
    return null;
}


export default findValue;
