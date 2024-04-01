import { readJsonFile } from "../utilites/userParamsGetters";

// const BITRIX_URL = "http://192.168.91.166";
const BITRIX_URL = 'https://bitrix24.martinural.ru';
const WORK_POSITIONS_DIRECTORATE = [
  "Заместитель генерального директора",
  "Генеральный директор",
  "Помощник генерального директора",
  "Начальник отдела розничных продаж",
  "Специалист по информационным технологиям ",
  "Начальник отдела /Юридический отдел/",
  "Логист",
  "Начальник отдела IT",
];

export const getWorkPosition = async () => {
  try {
    const response = await BX.rest.callMethod("im.user.get", {});
    let workPos = response["answer"]["result"]["work_position"];
    if (WORK_POSITIONS_DIRECTORATE.includes(workPos)) {
      workPos = "Дирекция";
    }
    return workPos;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getUsersByPosition = async (positionToSearch) => {
  try {
    const response = await BX.rest.callMethod("user.get", {
      filter: { WORK_POSITION: positionToSearch },
    });
    return response["answer"]["result"];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const collectDefaultData = async (workPos) => {
  const response = await getUsersByPosition(workPos);
  const userData = response[0];
  if (!userData || !userData["UF_USR_GUID"] || !userData["UF_USR_STORAGES3"]) {
    return null;
  }
  const storages = JSON.parse(userData["UF_USR_STORAGES3"]);
  const secondName = userData["SECOND_NAME"] ? userData["SECOND_NAME"] : "";
  return {
    name:
      userData["LAST_NAME"] +
      " " +
      userData["NAME"] +
      " " +
      secondName +
      ", " +
      workPos,
    guid: userData["UF_USR_GUID"],
    storages: storages,
  };
};

export const createFilename = async (reportName) => {
  const response = await BX.rest.callMethod("im.user.get", {});
  const userId = response["answer"]["result"]["id"];
  const currentDate = new Date();
  return (
    userId +
    reportName +
    currentDate.getFullYear() +
    currentDate.getMonth() +
    currentDate.getDay() +
    currentDate.getTime()
  );
};
export const getReportFrom1C = async (xml, filename) => {
  const storageId = await getUserDiskId();
  const formData = new FormData();
  const serializer = new XMLSerializer();
  formData.append("xml", serializer.serializeToString(xml));
  formData.append("filename", filename);
  formData.append("storageId", storageId);

  const response = await fetch(BITRIX_URL + "/1cApi/getReport", {
    method: "POST",
    body: formData,
  });
  return response.text();
};

export const downloadReportFile = async (fileId) => {
  BX.rest.callMethod("disk.file.get", { id: fileId }, function (result) {
    if (result.error()) {
      console.log(result.error());
    } else {
      console.log(result.data());
      const response = result.data();
      const url = response["DOWNLOAD_URL"];
      const link = document.createElement("a");
      link.href = url;
      link.download = response["NAME"];
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    }
  });
};

export const goToEdit = async (fileId) => {
  let linkToEdit = BX.util.add_url_param("/bitrix/services/main/ajax.php", {
    action: "disk.api.documentService.goToPreview",
    serviceCode: "onlyoffice",
    objectId: fileId,
    attachedObjectId: 0,
    versionId: 0,
    IFRAME: "Y",
    IFRAME_TYPE: "SIDE_SLIDER",
  });

  const currentSlider = BX.SidePanel.Instance.getSliderByWindow(window);
  if (!currentSlider) {
    BX.SidePanel.Instance.open(linkToEdit, {
      width: "100%",
      cacheable: false,
      allowChangeHistory: false,
      data: {
        documentEditor: true,
      },
    });
  } else {
    currentSlider.setContent(
      '<iframe src="' + linkToEdit + '" width="100%" height="100%"></iframe>'
    );
    currentSlider.setTitle("Заголовок слайдера");
  }
};

export const getUserClients = async (userGuid) => {
  try {
    const response = await fetch(
      BITRIX_URL + `/1cApi/getPartners/${userGuid}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    if (result.body.length > 0) {
      return result.body;
    }
    return [];
  } catch (error) {
    return null;
  }
};

export const getHierarchy = async () => {
  return await readJsonFile(
    "../../local/js/local/reports/src/data/workPositionsConfig.json"
  );
};

export const getUserDiskId = async () => {
  const response = await BX.rest.callMethod("im.user.get", {});
  let userId = response["answer"]["result"]["id"];
  const response2 = await BX.rest.callMethod("disk.storage.getlist", {
    filter: {
      ENTITY_ID: userId,
    },
  });
  return response2["answer"]["result"][0]["ID"];
};

export const getHierarchyFrom1C = async () => {
  const response = await fetch(BITRIX_URL + "/1cApi/getHierarchy/", {
    method: "GET",
  });
  return response.json();
};
