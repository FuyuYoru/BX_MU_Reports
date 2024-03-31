import "./DropdownMenu.css";

export const DropdownMenu = {
  props: {
    menuText: {
      type: String,
      required: true,
    },
    checkboxAction: {
      type: Function,
      required: true,
    },
    checkboxState: {
      type: String,
      required: true,
    },
    dropdownLength: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  computed: {
    uniqueId() {
      return this.stringToHash(this.menuText);
    },
    isSlotNotEmpty() {
      return true;
    },
  },
  methods: {
    toggleDropdown(event) {
      this.isDropdownVisible = !this.isDropdownVisible;
      if (event) {
        event.stopPropagation();
      }
    },
    stringToHash(str) {
      let hash = 0;
      if (str.length === 0) return hash;
      for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return hash;
    },
  },
  template: `
      <template v-if="isSlotNotEmpty">
        <div class="dropdown__container">
          <div :class="isDropdownVisible? 'dropdown__menuButton_opened' : 'dropdown__menuButton'">
            <span class="dropdown__menuButton__arrow" @click="toggleDropdown">
                <img :src="isDropdownVisible ?
                '../local/js/local/reports/public/minus.svg'
                :
                '../local/js/local/reports/public/plus.svg'"
                     alt="&darr;"
                >
            </span>
            <div class="dropdown__menuButton__text" @click="toggleDropdown">{{ menuText }}</div>
            <div class="dropdown__menuButton__checkbox">
              <input type="checkbox" v-model="checkboxState" @change="checkboxAction" :id="uniqueId">
              <label :for="uniqueId">Выбрать все</label>
            </div>
          </div>
          <div class="dropdown__menu"
               :style="{ 
                'display': isDropdownVisible ? 'block' : 'none'}"
          >
            <template v-if="isDropdownVisible">
              <slot>
                <div class="selectorItems__option"> Отсуствуют данные...</div>
              </slot>
            </template>
          </div>
        </div>
      </template>
    `,
};
