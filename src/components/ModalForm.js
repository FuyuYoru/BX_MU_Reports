import {
    reformXmlField,
    reformXmlPeriod,
    reformXmlDate,
} from "../utilites/xmlReform";
import {mapState, mapActions, mapGetters} from "ui.vue3.pinia";
import {ref} from "ui.vue3";
import "./ModalForm.css";
import {useReportsStore} from "../store";
import {ModalSelectorItems} from "./ModalSelectorItems";
import {ModalSelectedItems} from "./ModalSelectedItems";
import {createFilename, getReportFrom1C} from "../services/bitrixServices";

export const ModalForm = {
    components: {
        ModalSelectorItems,
        ModalSelectedItems,
    },
    data() {
        return {
            selectedItems: {},
            selectingError: null,
            isLoading: false,
            startDate: "",
            currentDate: "",
            ContainerRefArray: [],
        };
    },
    mounted() {
        const currentDate = new Date();
        if (!this.optionsLoaded) {
            this.asyncLoadData();
        }
        const startDateTime = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            currentDate.getDate(),
            0,
            0,
            0
        );
        this.startDate = startDateTime.toISOString().slice(0, 16);

        this.currentDate = currentDate.toISOString().slice(0, 16);

        this.activeRepStructure.filters.map((item) => {
            if (!this.selectedItems[item.using]) {
                this.selectedItems[item.using] = [];
            }
        });
    },
    computed: {
        ...mapState(useReportsStore, [
            "userAttrs",
            "templates",
            "reportType",
            "userAttrsTest",
            "activeRepStructure",
        ]),
        // ...mapGetters(useReportsStore, ["activeRepStructure"]),
        optionsLoaded() {
            return this.userAttrsTest;
        },
    },
    async updated() {
        await this.$nextTick();
    },
    methods: {
        ...mapActions(useReportsStore, [
            "toggleModal",
            "addTableData",
            "setCurrentFilename",
            "asyncLoadData",
        ]),
        addRef(el) {
            if (el) {
                this.ContainerRefArray.push(el);
            }
        },
        closeDateTimePicker(event) {
            const datetimePicker = event.target;
            datetimePicker.blur();
        },
        filterSelectItem(section, item) {
            if (!this.selectedItems[section]) {
                this.selectedItems[section] = [];
            }
            if (
                !this.selectedItems[section].find(
                    (option) => option["guid"] === item["guid"]
                )
            ) {
                this.selectedItems[section] = [...this.selectedItems[section], item];
            } else {
                this.filterRemoveItem(section, item);
            }
        },
        filterRemoveItem(section, item) {
            this.selectedItems[section] = this.selectedItems[section].filter(
                (option) => option["guid"] !== item["guid"]
            );
        },
        filterClear(section, options) {
            options.forEach((option) => {
                this.selectedItems[section] = this.selectedItems[section].filter(
                    (item) => item.guid !== option.guid
                );
            });
        },
        filterSelectAll(section, options) {
            if (!this.selectedItems[section]) {
                this.selectedItems[section] = [];
            }
            options.forEach((option) => {
                if (
                    !this.selectedItems[section].find((item) => item.guid === option.guid)
                ) {
                    this.selectedItems[section].push(option);
                }
            });
        },
        filterCheckOption(section, option) {
            if (!this.selectedItems[section]) {
                return false;
            }
            return this.selectedItems[section].find(
                (element) => element.guid === option.guid
            );
        },
        async xmlReform() {
            const checkAllFilters = Object.keys(this.selectedItems).length > 0;
            if (
                !this.activeRepStructure.filters.find(
                    (item, index) => this.selectedItems[item.using].length > 0
                )
            ) {
                this.selectingError = "Выбраны не все параметры отчёта";
                return;
            }
            const parser = new DOMParser();
            let xmlDoc = parser.parseFromString(
                this.templates[this.reportType],
                "text/xml"
            );
            const filterItemLeft = xmlDoc.querySelectorAll("filter item left");
            for (const index in this.activeRepStructure.filters) {
                const filterSection = this.activeRepStructure.filters[index];
                if (
                    !this.selectedItems[filterSection.using] ||
                    this.selectedItems[filterSection.using].length < 1
                ) {
                    continue;
                }
                const filterItemLeftArray = Array.from(filterItemLeft);
                const targetTag = filterItemLeftArray.find(
                    (item) => item.textContent === filterSection.inXml
                );
                const parentItemElement = targetTag.closest("item");
                const rightElement = parentItemElement.querySelector("right");
                const updatedElement = reformXmlField(
                    parentItemElement,
                    "right",
                    this.selectedItems[filterSection.using]
                );
                parentItemElement.parentNode.replaceChild(
                    updatedElement,
                    parentItemElement
                );
            }
            for (const index in this.activeRepStructure.parameters) {
                const paramType = this.activeRepStructure.parameters[index].view;
                const paramField = this.activeRepStructure.parameters[index].inXml;
                if (paramType === "Период" || paramType === "Период отгрузки") {
                    xmlDoc = reformXmlPeriod(xmlDoc, paramField, this.startDate, this.currentDate);
                } else if (paramType === "Дата отчёта") {
                    xmlDoc = reformXmlDate(xmlDoc, this.currentDate);
                }
            }
            this.isLoading = !this.isLoading;
            const fileName = await createFilename(this.reportType);
            const response = await getReportFrom1C(xmlDoc, fileName);
            const {file, data} = JSON.parse(response);
            this.setCurrentFilename(file);
            this.addTableData(JSON.parse(data), this.selectedItems);
            this.isLoading = !this.isLoading;
            this.toggleModal();
        },
    },
    template: `
    <div class="modal__overlay">
      <template v-if="isLoading">
        <div class="modal__loading">
        </div>
      </template>
      <template v-else-if="optionsLoaded">
        <div class="modal__container">
          <div class="modal__content">
            <h1 class="modal__headers">{{ activeRepStructure.name }}</h1>
            <template v-for="(item, index) in activeRepStructure['parameters']">
              <h2 class="modal__headers">{{ item.view }}</h2>
              <template v-if="['Период', 'Период отгрузки'].includes(item.view)">
                <div class="datetime-input-container">
                  <div class="datetime-input-group">
                    <label for="startDateTime">Начальная дата:</label>
                    <input
                        type="datetime-local"
                        id="startDateTime"
                        v-model="startDate"
                        class="datetime-input"
                        @input="closeDateTimePicker"
                    >
                  </div>
                  <div class="datetime-input-group">
                    <label for="endDateTime">Конечная дата:</label>
                    <input
                        type="datetime-local"
                        id="endDateTime"
                        v-model="currentDate"
                        class="datetime-input"
                        @input="closeDateTimePicker"
                    />
                  </div>
                </div>
              </template>
              <template v-else-if="item.view === 'Дата отчёта'">
                <div class="datetime-input-container">
                  <div class="datetime-input-group">
                    <label for="startDateTime">Дата:</label>
                    <input
                        type="datetime-local"
                        id="startDateTime"
                        v-model="currentDate"
                        class="datetime-input"
                        @input="closeDateTimePicker"
                    >
                  </div>
                </div>
              </template>
            </template>
            <h2 class="modal__headers" v-if="activeRepStructure['filters'].length > 0">Фильтр реквизитов</h2>
            <template v-if="selectingError">
              <h3>{{ selectingError }}</h3>
            </template>
            <template v-for="(item,index) in activeRepStructure['filters']" :key="index">
              <h3 class="modal__headers">{{ item.view }}</h3>
              <template v-if="optionsLoaded">
                <ModalSelectedItems
                    :selectedItems="selectedItems[item.using]?selectedItems[item.using]: []"
                    :removeItem="(option) => filterRemoveItem(item.using, option)"
                    :removeAll="()=>filterClear(item.using, userAttrsTest[item['using']])"
                />
                <div class="modal__selectors" :ref="addRef">
                  <template v-if="['clients', 'managers'].includes(item.using)">
                    <ModalSelectorItems
                        :filterField="item.using"
                        :title="'Доступные параметры'"
                        :options="userAttrsTest['managers']?userAttrsTest['managers']:userAttrsTest[item.using]"
                        :onSelect="(option) => filterSelectItem(item.using, option)"
                        :onRemove="(option) => filterRemoveItem(item.using, option)"
                        :selectAllAction="(options)=>filterSelectAll(item.using, options)"
                        :removeAllAction="(options)=>filterClear(item.using, options)"
                        :checkOption="(option) => filterCheckOption(item.using, option)"
                        :parentCheckboxState="false"
                        :scrollContainerRef="ContainerRefArray[index]"
                    />
                  </template>
                  <template v-else>
                    <ModalSelectorItems
                        :filterField="item.using"
                        :title="'Доступные параметры'"
                        :options="userAttrsTest[item.using]"
                        :onSelect="(option) => filterSelectItem(item.using, option)"
                        :onRemove="(option) => filterRemoveItem(item.using, option)"
                        :selectAllAction="(options)=>filterSelectAll(item.using, options)"
                        :removeAllAction="(options)=>filterClear(item.using, options)"
                        :checkOption="(option) => filterCheckOption(item.using, option)"
                        :parentCheckboxState="false"
                        :scrollContainerRef="ContainerRefArray[index]"
                    />
                  </template>
                </div>
              </template>
              <template>
                Zagruzka
              </template>
            </template>
          </div>
          <div class="modal__buttons">
            <button class="ui-btn ui-btn-danger-light" @click="()=>toggleModal()">Отмена</button>
            <button class="ui-btn ui-btn-success-light" @click="xmlReform">Сформировать отчет</button>
          </div>
        </div>
      </template>
    </div>
  `,
};
