export function getOptions(dataArray, field) {
    const resultOptions = [];

    if (field === 'managers') {
        const managersCheck = dataArray.some(item => 'managers' in item);
        // Рекурсивно вызываем getOptions для поля "managers"
        if (managersCheck) {
            dataArray.forEach(item => {
                if ('managers' in item) {
                    resultOptions.push(...getOptions(item.managers, field));
                }
            });
        } else {
            return dataArray;
        }
    } else if (field === 'clients') {
        // Проверяем наличие ключей "managers" и "clients" в каждом элементе массива
        const managersCheck = dataArray.some(item => 'managers' in item);
        const clientsCheck = dataArray.some(item => 'clients' in item);
        console.log(managersCheck, clientsCheck);
        // Рекурсивно вызываем getOptions для поля "managers", если есть
        if (managersCheck) {
            const tmpMngrs = getOptions(dataArray, 'managers');
            console.log(tmpMngrs);
            tmpMngrs.forEach(item => {
                resultOptions.push(...item.clients);
            });
        } else if (clientsCheck) {
            // Если есть поле "clients", добавляем его значения в resultOptions
            dataArray.forEach(item => {
                if ('clients' in item) {
                    resultOptions.push(...item.clients);
                }
            });
        }
    } else {
        return dataArray;
    }
    return resultOptions.filter(item => item !== null);
}
