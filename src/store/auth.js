import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state){
            return state.user
        }
    },

    actions: {
        async signIn ({dispatch}, credentials) {
            let response = await axios.post('auth/signin', credentials)

            return dispatch('attempt', response.data.token)
        },

        async attempt({commit, state}, token) {
            if(token){
                commit('SET_TOKEN', token)
            }

            if(!state.token) {
                return
            }

            try{
                let response = await axios.get('auth/me')
                localStorage.setItem('id_user', response.data.id)
                commit('SET_USER', response.data)
            }catch(e){
                commit('SET_USER', null)
                commit('SET_TOKEN', null)
            }
        },

        async signOut ({ commit }) {
            return axios.post('auth/signout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        },

        async register ({dispatch}, credentials) {
            let response = await axios.post('auth/register', credentials)

            console.log(response.data)
        },

        async me({dispatch}) {
            let response = await axios.get('auth/me')

            return response.data.role
        }

    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    }

}