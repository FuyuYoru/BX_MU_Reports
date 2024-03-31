import './Pagination.css'

export const Pagination = {
    props: {
        currentPage: {
            type: Number,
            require: true
        },
        pagesCount: {
            type: Number,
            require: true
        },
        selectPageAction: {
            type: Function,
            require: true
        }
    },
    methods: {
        switchNext() {
            if (this.currentPage >= this.pagesCount - 1) {
                return;
            }
            const tmpPageNum = this.currentPage + 1;
            this.selectPageAction(tmpPageNum);
            return;
        },
        switchBack() {
            const tmpPageNum = this.currentPage - 1;
            if (this.currentPage <= 0) {
                return;
            }
            this.selectPageAction(tmpPageNum);
            return;
        },
    },
    template: `
      <div class="pagination__container">
      <ul class="pagination__list">
        <li @click="() => selectPageAction(0)" >
          <img :src="'../local/js/local/reports/public/doubleleftarrow.svg'" alt="Task Image">
        </li>
        <li @click="switchBack">
          <img :src="'../local/js/local/reports/public/leftarrow.svg'" alt="Task Image">
        </li>
        <template v-for="(n, i) in pagesCount">
          <template v-if="Number(i) === currentPage">
            <li @click="() => selectPageAction(i)" class="pagination__currentItem">
              {{ n }}
            </li>
          </template>
          <template v-else>
            <li @click="selectPageAction(i)">
              {{ n }}
            </li>
          </template>
        </template>
        <li @click="switchNext">
          <img :src="'../local/js/local/reports/public/rightarrow.svg'" alt="Task Image">
        </li>
        <li @click="() => selectPageAction(pagesCount-1)">
          <img :src="'../local/js/local/reports/public/doublerightarrow.svg'" alt="Task Image">
        </li>
      </ul>
      </div>
    `
}