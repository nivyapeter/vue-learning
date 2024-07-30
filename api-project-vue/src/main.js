import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import HighchartsVue from 'highcharts-vue'

import "./index.css";

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).use(HighchartsVue).mount('#app')