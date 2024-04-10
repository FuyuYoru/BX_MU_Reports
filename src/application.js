//И здесь тоже на всякий
import {BitrixVue, createApp, h} from 'ui.vue3';
import {createPinia, defineStore, mapState, mapActions} from 'ui.vue3.pinia';
import {Dom, Loc} from 'main.core';
import {useReportsStore} from './store';
import {ReportsMain} from './components/ReportsMain';

export class Reports {
    #application;
    #loadingContainer;
    constructor(rootNode) {
        this.rootNode = document.querySelector(rootNode);
        this.pinia = createPinia()
        this.attachTemplate().then(r => console.log('Ready'));
    }

    async loadUserData() {
        // const start = new Date();
        this.#loadingContainer = document.createElement('div');
        this.#loadingContainer.classList.add('loading-wheel');
        this.rootNode.appendChild(this.#loadingContainer);
        const projectPath = '/local/js/local/reports'
        const templates = {}
        const storageXml = await fetch(projectPath + '/src/data/storage.xml');
        templates['storage'] = await storageXml.text()

        const storage_desk = await fetch(projectPath + '/src/data/storage_desk.xml');
        templates['storage_desk'] = await storage_desk.text()

        const route_list = await fetch(projectPath + '/src/data/route_list.xml');
        templates['route_list'] = await route_list.text()

        const settlementsStatement = await fetch(projectPath + '/src/data/settlementsStatement.xml');
        templates['settlementsStatement'] = await settlementsStatement.text()

        const grossProfit = await fetch(projectPath + '/src/data/grossProfit.xml');
        templates['grossProfit'] = await grossProfit.text()

        const client = await fetch(projectPath + '/src/data/client.xml');
        templates['client'] = await client.text()

        const debit = await fetch(projectPath + '/src/data/debit.xml');
        templates['debit'] = await debit.text()

        const points_visit = await fetch(projectPath + '/src/data/points_visit.xml');
        templates['points_visit'] = await points_visit.text()

        const sale_tp_client = await fetch(projectPath + '/src/data/sale_tp_client.xml');
        templates['sale_tp_client'] = await sale_tp_client.text()

        const sale_tp_nomenclature = await fetch(projectPath + '/src/data/sale_tp_nomenclature.xml');
        templates['sale_tp_nomenclature'] = await sale_tp_nomenclature.text()
        const reportsStore = useReportsStore(this.pinia);
        reportsStore.setTemplates(templates);
        this.rootNode.removeChild(this.#loadingContainer);
        this.#loadingContainer = null;
    }

    async attachTemplate() {
        const context = this;
        await this.loadUserData();

        this.#application = BitrixVue.createApp({
            name: 'Reports',
            components: {
                ReportsMain
            },
            beforeCreate() {
                this.$bitrix.Application.set(context);
            },
            template: '<ReportsMain/>',
        });

        this.#application.use(this.pinia);
        this.#application.mount(this.rootNode);
    }

    detachTemplate() {
        if (this.#application) {
            this.#application.unmount();
        }
    }
}