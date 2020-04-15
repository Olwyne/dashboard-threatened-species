import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
    activeAnimal:null
}

const mutations= {
    SET_ACTIVE_ANIMAL(state, props){
        state.activeAnimal=props
    }
}

const getters={
    getActiveAnimal(state){
        return state.activeAnimal
    }
}

const actions={
    setActiveAnimal : (store,props) => {
        store.commit('SET_ACTIVE_ANIMAL', props)
    }
}

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions
})