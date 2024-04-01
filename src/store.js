//СУКО
import { defineStore } from "ui.vue3.pinia";
import templatesJson from "./data/reportsStructure.json";
import {
  collectDefaultData,
  getHierarchy,
  getUserClients,
  getWorkPosition,
  getHierarchyFrom1C
} from "./services/bitrixServices";
import { getSubordinates1 } from "./utilites/userParamsGetters";

export const useReportsStore = defineStore("reports", {
  state: () => ({
    userAttrs: null,
    userAttrsTest: null,
    workPosition: null,
    templates: null,
    modalActive: false,
    reportType: null,
    activeRepStructure: null,
    error: null,
    hierarchyStructure: null,
    // pagesCount: 1,
    // currentPage: 0,
    // allTableData: null,
    currentTableBody: null,
    // currentTableHeader: null,
    // pageSize: 50,
    currentTableParams: null,
    currentFilename: null,
    modalFilterLoading: false,
  }),
  actions: {
    setUserAttrs(value) {
      this.userAttrs = value;
    },
    setTemplatesConfig(value) {
      this.templatesConfig = value;
    },
    async setWorkPosition() {
      this.workPosition = await getWorkPosition();
    },
    setTemplates(value) {
      this.templates = value;
    },
    setActiveReport(value) {
      this.activeRepStructure = templatesJson[value];
      this.reportType = value;
      this.toggleModal();
    },
    setCurrentFilename(filename) {
      this.currentFilename = filename;
    },
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    addTableData(tableData, tableParams) {
      this.currentTableParams = tableParams;
      this.currentPage = 0;
      const checkSize = tableData.length / this.pageSize;
      // this.currentTableHeader = tableData.splice(0, 2);
      this.currentTableBody = tableData;
    },
    switchCurrentTable(pageNum) {
      this.currentPage = pageNum;
      const startIndex = this.pageSize * pageNum;
      if (pageNum === this.pagesCount) {
        const lastIndex = this.allTableData.length;
        this.currentTableBody = this.allTableData.slice(startIndex, lastIndex);
        return;
      }
      const endIndex = startIndex + this.pageSize;
      this.currentTableBody = this.allTableData.slice(startIndex, endIndex);
    },
    handleCloseModal() {
      this.activeRepStructure = null;
      this.reportType = null;
      this.modalActive = false;
    },
    async loadData(field) {
      if (["managers", "clients"].includes(field)) {
        await this.loadManagersData();
      } else {
        await this.loadDefaultData();
      }
    },
    async loadDefaultData(workPos = null) {
      if (workPos === null) {
        workPos = await getWorkPosition();
      }
      this.userAttrsTest = await collectDefaultData(workPos);
    },
    async asyncLoadClients(storeTarget, guid) {
      const storeData = this.findItemById(this.userAttrsTest, storeTarget);
      if (storeData) {
        if (!storeData.clients || storeData.clients.length === 0) {
          storeData.clients = await getUserClients(guid);
        }
      }
    },
    async asyncLoadData(workPos = null, target = null) {
      await this.setHierarchyStructure();
      if (!workPos) {
        workPos = await getWorkPosition();
      }

      if (this.userAttrsTest === null) {
        this.userAttrsTest = await collectDefaultData(workPos);

        const tmpWorkPos = await getWorkPosition();
        if (tmpWorkPos.includes("ТП") && !target) {
          const clients = await getUserClients(this.userAttrsTest["guid"]);
          this.userAttrsTest["managers"] = [{ ...this.userAttrsTest, clients }];
        }
      }

      let storeData = this.userAttrsTest;
      if (target) {
        storeData = this.findItemById(this.userAttrsTest, target) || storeData;
      }

      const subs = getSubordinates1(this.hierarchyStructure, workPos);
      if (subs && subs.length > 0) {
        for (const item of subs) {
          const itemAttrs = await collectDefaultData(item);
          if (!itemAttrs) {
            continue;
          }
          if (!storeData.managers) {
            storeData.managers = [];
          }
          const check = storeData.managers.find(
              (manager) => manager.name === itemAttrs.name
          );
          if (!check) {
            storeData.managers.push(itemAttrs);
          }
          if (item.includes("ТП")) {
            this.asyncLoadClients(itemAttrs.name, itemAttrs.guid);
          }
          await this.asyncLoadData(item, itemAttrs.name);
        }
      }
    },
    async setHierarchyStructure() {
      if (!this.hierarchyStructure) {
        this.hierarchyStructure = await getHierarchyFrom1C();
      }
    },
    findItemById(data, name) {
      if (typeof data === "object") {
        if (data.name === name) {
          return data;
        }
        if (data.managers && Array.isArray(data.managers)) {
          for (const manager of data.managers) {
            const foundItem = this.findItemById(manager, name);
            if (foundItem !== null) {
              return foundItem;
            }
          }
        }
      }
      return null;
    },
  },
});
