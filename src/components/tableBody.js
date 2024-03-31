export const TableBody = {
    name: 'TableBody',
    props: {
        options: {
            type: Array,
            required: true,
        },
        rowLevel: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            collapsedRows: new Set(), // Множество для хранения индексов скрытых строк
        };
    },
    methods: {
        checkHiddenRows(rowNum) {
            const currentLevel = this.options[rowNum][0];

            // Проверяем, что индекс следующей строки в пределах массива и уровень вложенности следующей строки не равен текущему уровню
            if (rowNum + 1 < this.options.length && this.options[rowNum + 1][0] !== currentLevel) {
                // Ищем индекс следующей строки с таким же уровнем вложенности
                const endIndex = this.options.slice(rowNum + 1)
                    .findIndex((item, index) => item[0] === currentLevel);
                // Если индекс найден, возвращаем срез массива строк
                if (endIndex !== -1) {
                    return this.options.slice(rowNum + 1, rowNum + 1 + endIndex);
                } else {
                    return this.options.slice(rowNum + 1);
                }
            }
            return null;
        },
        toggleRow(rowNum) {
            if (this.collapsedRows.has(rowNum)) {
                this.collapsedRows.delete(rowNum); // Если строка скрыта, удаляем ее из множества скрытых строк
            } else {
                this.collapsedRows.add(rowNum); // Если строка видима, добавляем ее в множество скрытых строк
            }
            console.log(this.collapsedRows);
        },
        isRowCollapsed(rowNum) {
            return this.collapsedRows.has(rowNum); // Проверяем, скрыта ли строка
        },
    },
    computed: {
        thisLevelIndexes() {
            return this.options
                .map((value, index) => ({value, index}))
                .filter(item => item.value[0] === this.rowLevel)
                .map(item => item.index)
        },
    },
    mounted(){
        this.thisLevelIndexes.forEach((item,index) => {
            if (this.checkHiddenRows(item)){
                this.toggleRow(item);
            }
        })
    },
    template: `
      <template v-for="(row, rowNum) in thisLevelIndexes">
        <tr v-if="!isRowCollapsed(row) && !checkHiddenRows(row)">
          <td v-for="(cell, cellIndex) in options[row]">
            <template v-if="cellIndex===0">
              {{ ' ' }}
            </template>
            <template v-else>
              {{ cell === '#NULL!' ? ' ' : cell }}
            </template>
          </td>
        </tr>
        <tr v-if="checkHiddenRows(row)" @click="toggleRow(row)">
          <template v-for="(cell,cellIndex) in options[row]">
            <td>
              <template v-if="cellIndex===0">
                <span>
                <img :src="!isRowCollapsed(row) ?
                '../local/js/local/reports/public/minus.svg'
                :
                '../local/js/local/reports/public/plus.svg'"
                     alt="&darr;"
                     style="width: 15px;"
                >
                </span>
              </template>
              <template v-else>
                {{ cell === '#NULL!' ? ' ' : cell }}
              </template>
            </td>
          </template>
        </tr>
        <TableBody
            v-if="checkHiddenRows(row) && !isRowCollapsed(row)"
            :options="checkHiddenRows(row)"
            :rowLevel="rowLevel+1"
        />
      </template>
    `
}
