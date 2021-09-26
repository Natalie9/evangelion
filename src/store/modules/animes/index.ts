import { Module } from 'vuex'
import Animes from 'src/types/Animes'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { StateInterface } from 'src/store'

const anime: Module<Animes, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default anime
