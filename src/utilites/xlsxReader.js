import {read, utils} from "xlsx";

export const getExcelWorkbook = (binaryString) => {
    // const CHUNK_SIZE = 1024;
    //
    // let offset = 0;
    // let fileContent = '';
    //
    // while (offset < arrayBuffer.byteLength) {
    //     const chunk = new Uint8Array(arrayBuffer.slice(offset, offset + CHUNK_SIZE));
    //     fileContent += String.fromCharCode.apply(null, chunk);
    //     offset += CHUNK_SIZE;
    // }

    const workbook = read(binaryString, { type: 'binary' });

    return workbook
}