export default {
    state:{
        isCollapse: false , //用于控制左侧菜单收起
        tabsList : [
            {
                path: '/',
                name: "Home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ] //面包屑的数据
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse  = !state.isCollapse
        },
        //修改(更新) 面包屑数据
        selectMenu() {

        }
    }
}