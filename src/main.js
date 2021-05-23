import Vue from 'vue'
import { Button } from 'element-ui';
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
