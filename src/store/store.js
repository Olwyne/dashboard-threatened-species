import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
    activeAnimal:null
}

const mutations= {
    ADD_ACTIVE_ANIMAL(state, props){
        state.activeAnimal=(props)
    },
    REMOVE_ACTIVE_ANIMAL(state,props){
        state.activeAnimal=state.activeAnimal.filter((item) => item !== props)
    }
}

const getters={
    getActiveAnimal(state){
        return state.activeAnimal
    }
}

const actions={
    setActiveAnimal : (store,props) => {
        store.commit('ADD_ACTIVE_ANIMAL', props)
    },
    removeActiveAnimal: (store, props) => {
        store.commit('REMOVE_ACTIVE_ANIMAL', props)
    }
}

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions
})