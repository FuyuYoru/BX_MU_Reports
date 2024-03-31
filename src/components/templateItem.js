import './templateItem.css'
import {mapState, mapActions, mapGetters} from "ui.vue3.pinia";
import {useReportsStore} from '../store';


export const TemplateItem = {
    props: {
        imageSrc: {
            type: String,
            required: false
        },
        templateName: {
            type: String,
            required: true
        },
        handleItemClick: {
            type: Function,
            required: false
        }
    },
    template: `
      <div @click="handleItemClick" class="item__container">
              <template v-if="imageSrc">
                <img :src="'../local/js/local/reports/public/' + templateName + '.svg'" alt="Task Image">
              </template>
      <!--        <p>{{ templateName }}</p>-->
      {{ templateName }}
      </div>`
    ,
    styles: `
    /* Ваши стили компонента Item */
    .item__container {
      /* стили */
    }
  `
};
