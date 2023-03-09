export default {
    state:{
        isCollapse: false  //用于控制左侧菜单收起

    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse  = !state.isCollapse
        }
    }
}