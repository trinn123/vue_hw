import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters:{
    updates: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }){
        state.data = res.data
    },
    add(state, {payload}){
      state.data.push(payload)
    }
  },
  actions: {
      fetchUpdate({ commit }){
          let res = {
              data:[
                  {
                    detail:"เงินเดือน",
                    income:2000,
                    expenses:"",
                    date:"2021-07-20"
                  },
                  {
                    detail: "ซื้อข้าว",
                    income:"",
                    expenses:40,
                    date: "2021-07-21"
                  
                  }
              ]
          }
          commit("fetch",{ res })
      },
      addUpdate ({ commit }, payload){
        commit('add', {payload})
      }
  },
  modules: {
  }
})