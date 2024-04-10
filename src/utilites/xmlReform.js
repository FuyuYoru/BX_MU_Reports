function formatDate(dateString) {
    const date = new Date(dateString);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date.toISOString().slice(0, 19).replace(' ', 'T');
}

function reformXmlField(xmlObject, fieldName, value) {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();

    // Найти элемент с нужным полем
    const fieldElement = xmlObject.querySelector(fieldName);
    if (fieldElement) {
        if (Array.isArray(value)) {
            // Если значение является массивом, дублировать текущее значение и добавить переданные значения
            const currentValue = fieldElement.textContent;

            value.forEach((item, index) => {
                const clonedElement = fieldElement.cloneNode(true);
                clonedElement.textContent = item.guid;

                // Добавить новый элемент после текущего элемента
                fieldElement.parentNode.insertBefore(clonedElement, fieldElement.nextSibling);
            });
            fieldElement.parentNode.removeChild(fieldElement);
        } else {
            // Просто установить новое значение, если передано одно значение
            fieldElement.textContent = value.guid;
        }

        const updatedXmlString = serializer.serializeToString(xmlObject);

        // Вернуть обновленный XML-документ в виде строки
        return xmlObject;
    } else {
        console.error(`Field '${fieldName}' not found in the XML object.`);
    }
}

function reformXmlPeriod(xmlDoc,field, startDate, endDate) {
    console.log(field);
    const periodElement = Array.from(xmlDoc.querySelectorAll('dataParameters item parameter'))
        .find((item) => item.textContent === field);
    const endDateElement = xmlDoc.querySelector('dataParameters');
    const parentElement = periodElement.closest('item');
    const startTag = parentElement.querySelector('value startDate');
    const endTag = parentElement.querySelector('value endDate');
    console.log(startTag, endTag);
    startTag.textContent = formatDate(startDate);
    endTag.textContent = formatDate(endDate);
    return xmlDoc
}

function reformXmlDate(xmlDoc, date) {
    const periodElement = Array.from(xmlDoc.querySelectorAll('dataParameters item parameter')).find((item) => item.textContent === 'ДатаОтчета');

    const parentElement = periodElement.closest('item');

    const dateTag = parentElement.querySelector('value');

    dateTag.textContent = formatDate(date);

    return xmlDoc
}

export {reformXmlField, reformXmlPeriod, reformXmlDate};