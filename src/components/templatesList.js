import {TemplateItem} from './templateItem'
import './TemplatesList.css'
import templatesJson from '../data/reportsStructure.json';
import {mapState, mapActions, mapGetters} from "ui.vue3.pinia";
import {useReportsStore} from '../store';

export const TemplatesList = {
    components: {
        TemplateItem,
    },
    methods: {
        ...mapActions(useReportsStore, ['setActiveReport', 'toggleModal']),
        onClickItem(item) {
            this.setActiveReport(item);
        }
    },
    computed: {
        templates() {
            return templatesJson
        }
    },
    template: `
<!--      <h1 class = "text_name">Отчёты</h1>-->
      <div class="templates__container">

      <TemplateItem
          v-for="item in Object.keys(templates)"
          :imageSrc="'../local/js/local/reports/public/report.svg'"
          :templateName="templates[item].name"
          :handleItemClick="()=>onClickItem(item)"
      />
      </div>`
    ,
    styles: `
    /* Ваши стили компонента Item */
    .templates__container {
      display: flex;
      flex-direction: row;
    }`
};
