import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state from './state'
import { Anime } from './types/'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const anime: Module<Anime, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default anime
