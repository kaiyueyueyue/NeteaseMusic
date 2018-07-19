import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '@/pages/Index'

// 电台、推荐、排行榜父路由
import center from '@/pages/Center'
// 电台
import Radio from '@/pages/Radio'
import RadioList from '@/pages/RadioList'
import RadioInfor from '@/components/radio/RadioInfor'
import RadioListProgram from '@/components/radio/RadioListProgram'
// 首页推荐页
import tuijian from '@/pages/tuijian'

// 个人页
import left from '@/pages/Left'
// 视频页
import right from '@/pages/Right'
// 登录页
import Login from '@/pages/Login'

// 用户信息页
import Mine from '@/pages/Mine'
import music from '../components/mine/MineMusic'
import movement from '../components/mine/MineMovement'

// 歌单页
import list from '../pages/List'

// 每日推荐页
import daily from '../pages/daily'

// 搜索页
import search from '../pages/search'

// 歌手歌单页
import SingerSongList from '../pages/singerSongList'
//歌手歌曲列表页
import SingerSong from '../components/singer/singerSong'

// 排行榜页
import Ranking from '../pages/rankingList'
//排行榜歌单页
import RankSongList from '../pages/RankSongList.vue'


//歌手列表
import singer from '../pages/singer'

// play
import Play from '../pages/play'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'list-active',
    routes: [{

            // path: '/',
            // name: 'root',
            // component: Login //根路径
            path: '/',
            redirect: '/index'
        },
        {
            path: '/login',
            name: 'login',
            component: Login //根路径
        },
        {
            path: '/index',
            // name: 'index',
            component: index, //首页
            children: [{
                    path: '/',
                    redirect: '/center' //首页子路由根路由 center
                },
                // center
                {
                    // name: 'center',
                    path: '/center',
                    component: center,
                    children: [{
                            path: '/',
                            // name: 'radio',
                            component: tuijian //center子路由推荐页
                        },
                            {
                                name: 'tuijian',
                                path: '/tuijian',
                                component: tuijian //center子路由推荐页
                            }, {
                                name: 'paihangbang',
                                path: '/paihangbang',
                                component: Ranking //center子路由排行榜页
                            },
                            {
                                name: 'radio',
                                path: '/radio',
                                component: Radio, //center子路由电台页
                            }
                    ]
                },
                // left   个人本地音乐等
                {
                    path: '/left',
                    component: left
                },
                // right   视频页
                {
                    path: '/right',
                    component: right
                },

            ]
        },
        //电台列表页
        {
            path: '/radiolist',
            // name: 'radiolist',
            component: RadioList,
            children: [{
                    path: '/',
                    component: RadioListProgram //电台节目列表
                },
                {
                    name: 'radioinfor',
                    path: '/radioinfor',
                    component: RadioInfor //电台详情页
                },
                {
                    name: 'radiolistprogram',
                    path: '/radiolistprogram',
                    component: RadioListProgram //电台节目列表
                },

            ]
        },
        // 用户信息页
        {
            path: '/mine',
            // name: 'mine',
            component: Mine,
            children: [{
                    path: '/',
                    component: music //用户歌单
                },
                {
                    name: 'music',
                    path: '/music',
                    component: music //用户歌单
                },
                {
                    name: 'movement',
                    path: '/movement',
                    component: movement //用户动态
                }
            ]
        },
        //歌单列表
        {
            path: '/list',
            name: 'list',
            component: list
        },
        //每日推荐
        {
            path: '/daily',
            component: daily
        },
        //搜索页
        {
            path: '/search',
            component: search
        },
        // 歌手歌单页
        {
            path: '/singersonglist',
            // name: 'singersonglist',
            component: SingerSongList,
            children: [{
                    path: '/',
                    redirect: '/singerSong' //歌手歌曲列表
                },
                {
                    path: '/singerSong',
                    name: 'singerSong',
                    component: SingerSong //歌手歌曲列表
                }
            ]
        },
        // 排行榜页
        {
            path: '/ranking',
            component: Ranking
        },
        {
            path: '/ranksonglist',
            name: 'ranksonglist',
            component: RankSongList
        },

        // 歌手列表
        {
            path: '/singer',
            name: 'singer',
            component: singer
        },

        // play
        {
            path: '/play',
            name: 'play',
            component: Play
        }


    ]
})