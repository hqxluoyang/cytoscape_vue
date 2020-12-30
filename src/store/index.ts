/*
 * @Author: your name
 * @Date: 2020-12-29 10:16:15
 * @LastEditTime: 2020-12-30 13:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\store\index.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectMod:""
  },
  mutations: {
  },
  actions: {
    
  },

  getters: {
    get_select_mod(state:any) { 
      return state.selectMod
    }
  },
  modules: {
  }
})
