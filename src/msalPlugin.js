import { initializeMsal, getMsalInstance } from './msalService';

export default {
    install(Vue) {
        Vue.prototype.$msal = {
            instance: null,
            async init() {
                this.instance = await initializeMsal();
            },
            getInstance() {
                return this.instance;
            }
        };
    }
};
