function findFieldValue (obj, fieldName) {
    let result = null;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === fieldName) {
                result = obj[key];
                break;
            } else if (typeof obj[key] === 'object') {
                result = findFieldValue(obj[key], fieldName);
                if (result !== null) {
                    break;
                }
            }
        }
    }

    return result;
}

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

export default findFieldValue;