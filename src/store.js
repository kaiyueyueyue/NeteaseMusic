import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    playBoxHeight: 0,
    playDisplay: 'none',
    bottomDisplay: 'none',
    songListInfor: '',
    num: 0

}

const mutations = {
    changeStyle(state, args) {
        state.playBoxHeight = '100%'
        state.playDisplay = 'block'
        state.bottomDisplay = 'none'
        state.num = args
            // console.log(state.num, args)
    },
    scaleView(state) {
        state.playBoxHeight = 0
        state.playDisplay = 'none'
        state.bottomDisplay = 'flex'
    },
    setSongList(state, songListInfor) {
        state.songListInfor = songListInfor
            // console.log(songListInfor)
    },
    nextSong(state) {

        if (state.songListInfor.tracks) {
            if (state.num >= state.songListInfor.tracks.length) {
                state.num = 0
            } else {
                state.num += 1
            }
        } else {
            if (state.num >= state.songListInfor.hotSongs.length) {
                state.num = 0
            } else {
                state.num += 1
            }
        }
    },
    preSong(state) {

        if (state.num <= 0) {
            state.songListInfor.tracks != undefined ? state.num = state.songListInfor.tracks.length : state.num = state.songListInfor.hotSongs.length
        } else {
            state.num -= 1
        }
    }

}
const actions = {
    changeStyle({
        commit
    }, index) {
        commit('changeStyle', index)

    },
    setSongList({
        commit
    }, id) {
        // console.log(id)
        fetch(
            `http://120.79.162.149:3000/playlist/detail?id=${id}`
        ).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    // this.oList = data.result;
                    var songListInfor = data.result
                        // console.log(songListInfor)
                    commit('setSongList', songListInfor)
                });
            }
        });
        // commit('setSongList', )
    },

    setSingerSongList({ commit }, id) {
        fetch(
            `http://120.79.162.149:3000/artists?id=${id}&limit=40`
        ).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data)
                    var songListInfor = data
                        // console.log(data)
                    commit('setSongList', songListInfor)
                });
            }
        });
    },

    scaleView({
        commit
    }) {
        commit('scaleView')
    },
    nextSong({ commit }) {
        commit('nextSong')
    },
    preSong({ commit }) {
        commit('preSong')
    },
}

const getters = {

}
export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state
})