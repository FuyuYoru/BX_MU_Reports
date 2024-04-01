import "./reportTable.css";
import { useReportsStore } from "../store";
import { mapState } from "ui.vue3.pinia";
import { Ears } from "ui.ears";
import { Pagination } from "./Pagination";
import { downloadReportFile, goToEdit } from "../services/bitrixServices";
import { TableBody } from "./tableBody";

export const ReportTable = {
  // props: {
  //     sheetsData: {
  //         type: Object,
  //         required: true
  //     },
  //     sheetsNames: {
  //         type: Array,
  //         required: true,
  //     }
  // },
  computed: {
    ...mapState(useReportsStore, [
      "currentTableBody",
      "currentFilename",
      "currentTableParams",
      "activeRepStructure",
      "reportType",
    ]),
  },
  methods: {
    downloadExcelFile() {
      return downloadReportFile(this.currentFilename);
    },
    goToViewExcelFile() {
      return goToEdit(this.currentFilename);
    },
  },
  components: {
    Pagination,
    TableBody,
  },
  mounted() {
    const ears = new Ears({
      container: document.querySelector(".table__content"),
      smallSize: false,
      noScrollbar: true,
    });
    ears.init();
  },
  template: `
    <div class="table__MainContainer">
      <div class="table__Container">
        <div class="table__buttonsContainer">
          <button class="downloadButton ui-btn ui-btn-secondary" @click="downloadExcelFile">Загрузить на диск
          </button>
          <button class="downloadButton ui-btn ui-btn-secondary" @click="goToViewExcelFile">Открыть в редакторе
          </button>
        </div>
        <div class="table__content">
<!--          <div class="table__params">-->
<!--            <template v-if="currentTableParams">-->
<!--              <h1>{{ activeRepStructure['name'] }}</h1>-->
<!--              <div v-for="(value, key) in currentTableParams" :key="key">-->
<!--                <h2>{{ activeRepStructure['filters'].find(item=>item.using === key)['view'] }}: </h2>-->
<!--                <h3>-->
<!--                  <span v-for="(item, index) in value" :key="index">{{ item.name }}, </span>-->
<!--                </h3>-->
<!--              </div>-->
<!--            </template>-->
<!--          </div>-->
          <table>
            <tbody>
            <TableBody
                :options="currentTableBody"
                :rowLevel="0"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};
