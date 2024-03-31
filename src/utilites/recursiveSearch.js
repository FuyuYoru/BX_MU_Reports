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

export default findFieldValue;