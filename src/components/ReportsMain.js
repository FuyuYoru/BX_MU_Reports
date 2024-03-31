import { TemplatesList } from "./templatesList";
import { ModalForm } from "./ModalForm";
import { ReportTable } from "./reportTable";
import { useReportsStore } from "../store";
import { mapState, mapActions, mapGetters } from "ui.vue3.pinia";
import "./ReportsMain.css";
import { getUserDiskId } from "../services/bitrixServices";
export const ReportsMain = {
  computed: {
    ...mapState(useReportsStore, ["modalActive", "currentTableBody"]),
  },
  data() {
    return {
      loading: true,
    };
  },
  components: {
    TemplatesList,
    ModalForm,
    ReportTable,
  },
  methods: {
    check() {
      console.log(getUserDiskId());
    },
  },
  template: `
      <div>
<!--        <button @click="check">AAAAAAAA</button>-->
      </div>
      <div class="reports__container">
        <TemplatesList/>
        <template v-if="currentTableBody">
          <ReportTable/>
        </template>
        <template v-else>
          <div class="noReport__container">
            <div class="noReport__Text">
              Нет загруженных отчётов...
            </div>
          </div>
        </template>
        <ModalForm
            v-if="modalActive"
        />
      </div>
    `,
};
