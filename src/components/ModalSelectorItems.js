import { mapState, mapActions, mapGetters } from "ui.vue3.pinia";
import "./ModalSelectElement.css";
import { useReportsStore } from "../store";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownOptions } from "./DropdownOptions";
import { getOptions } from "../utilites/getOptions";

export const ModalSelectorItems = {
  name: "ModalSelectorItems",
  props: {
    filterField: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    onSelect: {
      type: Function,
      required: false,
    },
    onRemove: {
      type: Function,
      required: false,
    },
    selectAllAction: {
      type: Function,
      required: false,
    },
    removeAllAction: {
      type: Function,
      required: false,
    },
    checkOption: {
      type: Function,
      required: false,
    },
    parentCheckboxState: {
      type: Boolean,
      required: false,
    },
    scrollContainerRef: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedItems: [],
      isDropdownVisible: false,
      selectAll: false,
      isDropdownReady: false,
    };
  },
  components: {
    DropdownMenu,
    DropdownOptions,
  },
  watch: {
    parentCheckboxState(newValue, oldValue) {
      this.selectAll = newValue;
    },
  },
  computed: {
    optionsLoaded() {
      return this.options;
    },
  },
  methods: {
    ...mapActions(useReportsStore, ["asyncLoadData"]),
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleSelectAll(options) {
      this.selectAll = !this.selectAll;
      const tmpOptions = getOptions(options, this.filterField);
      if (this.selectAll) {
        this.selectAllAction(tmpOptions);
      } else {
        this.removeAllAction(tmpOptions);
      }
    },
    addItem(item) {
      if (!this.selectedItems.find((option) => option.guid === item.guid)) {
        this.selectedItems.push(item);
        if (this.onSelect) this.onSelect(item);
      } else {
        this.removeItem(item);
      }
    },
    removeItem(item) {
      this.selectedItems = this.selectedItems.filter(
        (option) => option.guid !== item.guid
      );
      if (this.onRemove) this.onRemove(item);
    },
    isSelected(option) {
      return this.selectedItems.some((item) => item.guid === option.guid);
    },
    isRecursive() {
      const filterCheck =
        this.filterField === "managers" || this.filterField === "clients";
      const managersCheck =
        this.options.length > 0 && this.options[0].managers !== undefined;
      return filterCheck && managersCheck;
    },
    handleDropdownReady() {
      this.isDropdownReady = true;
    },
  },
  template: `
    <div class="selectorItems__options">
      <template v-if="optionsLoaded">
          <DropdownMenu
              v-show="isDropdownReady"
              :menuText="title"
              :checkboxAction="()=>toggleSelectAll(options)"
              :checkboxState="selectAll"
              :dropdownLength="options.length > 20 ? 20 : options.length"
              @dropdownReady="handleDropdownReady"
          >
            <template v-slot:default>
              <template v-if="!isRecursive() && filterField !== 'clients'">
                <DropdownOptions
                    :options="options"
                    :checkOption="checkOption"
                    :containerHeight="400"
                    :scrollContainerRef="scrollContainerRef"
                    :selectItem="addItem"
                />
              </template>
              <template v-for="(item, index) in options">
                <template v-if="isRecursive()">
                  <ModalSelectorItems
                      :filterField="filterField"
                      :title="item.name"
                      :options="item.managers"
                      :onSelect="onSelect"
                      :onRemove="onRemove"
                      :selectAllAction="selectAllAction"
                      :removeAllAction="removeAllAction"
                      :checkOption="(option) => checkOption(option)"
                      :parentCheckboxState="selectAll"
                      :scrollContainerRef="scrollContainerRef"
                  />
                </template>
                <template v-else-if="!isRecursive() && filterField === 'clients'">
                  <ModalSelectorItems
                      :filterField="'default'"
                      :title="item.name"
                      :options="item.clients? item.clients: []"
                      :onSelect="onSelect"
                      :onRemove="onRemove"
                      :selectAllAction="selectAllAction"
                      :removeAllAction="removeAllAction"
                      :checkOption="(option) => checkOption(option)"
                      :parentCheckboxState="selectAll"
                      :scrollContainerRef="scrollContainerRef"
                  />
                </template>
              </template>
            </template>
            <template v-else>
              Загрузка...
            </template>
          </DropdownMenu>
          <div v-if="!isDropdownReady">
            Загрузка...
          </div>
      </template>
    </div>
  `,
};
