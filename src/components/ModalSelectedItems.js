import {mapState, mapActions, mapGetters} from "ui.vue3.pinia";
import {useReportsStore} from '../store'
import './ModalSelectedItems.css'

export const ModalSelectedItems = {
    props: {
        selectedItems: {
            type: Array,
            required: true
        },
        removeItem: {
            type: Function,
            required: true
        },
        removeAll: {
            type: Function,
            required: false
        },
    },
    template: `
      <div class="selectedItems__mainContainer">
      <template v-if="selectedItems.length > 0">
        <div
            class="selectedItems__item"
            v-for="(item, index) in selectedItems"
            @click="() => removeItem(item)"
        >
          {{ item['name'] }}
        </div>
      </template>
      <template v-else>
        <div>Здесь будут показаны выбранные элементы</div>
      </template>
      </div>
    `
}