import "./ModalSelectElement.css";

export const DropdownOptions = {
  props: {
    options: {
      type: Array,
      required: true,
    },
    checkOption: {
      type: Function,
      required: true,
    },
    containerHeight: {
      type: Number,
      required: true,
    },
    scrollContainerRef: {
      type: Object,
      required: true,
    },
    selectItem: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = false;
  },
  template: `
    <template v-if="isLoading">
      <div>
        Загрузка...
      </div>
    </template>
    <template v-else>
      <div 
      v-for="(item, index) in options" 
      :key="index" 
      class="selectorItems__option" 
      :class="checkOption(item) ? 'selected' : ''"
      @click="selectItem(item)">
      <span v-if="checkOption(item)">
        <img src="../local/js/local/reports/public/checked.svg" alt="&darr;">
      </span>
        {{ item.name }}
      </div>
      <template v-if="options.length===0">
        <div class="selectorItems__option">Нет доступных клиентов</div>
      </template>
    </template>
  `,
};
