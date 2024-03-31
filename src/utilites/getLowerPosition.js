import {getUsersByPosition} from '../services/bitrixServices.js'
function transformObject(inputObject, referenceObject) {
    const resultObject = {};
    console.log(typeof inputObject);
    for (const key in inputObject) {
        const value = inputObject[key];
        console.log(typeof value);

        if (typeof value === 'string') {
            const user = referenceObject[value];
            if (user) {
                resultObject[key] = [{name: value, guid: user.guid}];
            }
        } else if (Array.isArray(value)) {
            const transformedArray = value.reduce((acc, item) => {
                const user = referenceObject[item];
                if (user) {
                    acc.push({name: item, guid: user.guid});
                }
                return acc;
            }, []);
            if (transformedArray.length > 0) {
                resultObject[key] = transformedArray;
            }
        } else if (typeof value === 'object') {
            const transformedValue = transformObject(value, referenceObject);
            if (Object.keys(transformedValue).length > 0) {
                resultObject[key] = transformedValue;
            }
        }
    }
    return resultObject;
}

export const objectTransform = async (inputObj, refObj) => {
    const resultObj = {};

    if (typeof inputObj === 'string') {
        const user = await getUsersByPosition(inputObj);
        if (user && user.length>0) {
            console.log(user);
            return { name: inputObj, guid: user.guid };
        }
        return null;
    } else if (Array.isArray(inputObj)) {
        const transformedArray = [];

        for (const item of inputObj) {
            const user = await getUsersByPosition(item);
            if (user && user.length>0) {
                console.log(user);
                transformedArray.push({ name: item, guid: user.guid });
            }
        }

        if (transformedArray.length > 0) {
            return transformedArray;
        }
        return null;
    } else if (typeof inputObj === 'object') {
        Object.keys(inputObj).forEach((element) => {
            const tmpResult = objectTransform(inputObj[element], refObj);
            if (tmpResult) {
                resultObj[element] = tmpResult;
            }
        });
    }
    return resultObj;
};

export const objectTransform1 = (inputObj, refObj) => {
    const resultObj = {};
    if (typeof inputObj === 'string') {
        const user = refObj[inputObj];
        if (user) {
            return {name: value, guid: user.guid};
        }
        return null
    } else if(Array.isArray(inputObj)) {
        const transformedArray = inputObj.reduce((acc, item) => {
            const user = refObj[item];
            if (user) {
                acc.push({name: item, guid: user.guid});
            }
            return acc;
        }, []);
        if (transformedArray.length > 0) {
            return transformedArray;
        }
        return null
    } else if (typeof inputObj === 'object') {
        Object.keys(inputObj).forEach((element) => {
            const tmpResult = objectTransform(inputObj[element], refObj);
            if (tmpResult) {
                resultObj[element] = tmpResult;
            }
        })
    }
    return resultObj;
}

export default transformObject;