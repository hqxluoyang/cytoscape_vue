/*
 * @Author: your name
 * @Date: 2020-12-29 10:16:15
 * @LastEditTime: 2020-12-30 14:02:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import EventBus from '@/utils/EventBus'
import "./assets/main.scss"
import "@/utils/axios_config"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

document.addEventListener('mousemove', (e) => {
  EventBus.$emit('webmousemove', e)
})

document.addEventListener('mouseup', (e) => {
  EventBus.$emit('webmouseup', e)
})

document.addEventListener('mousedown', (e) => {
  EventBus.$emit('webmousedown', e)
})
window.document.oncontextmenu = function (){
  return false;
}
document.addEventListener('contextmenu', (e) => {
  EventBus.$emit('contextmenu', e)
  return false;
})


window.ondragstart = function () {
  return false;
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
