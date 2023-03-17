export default {
    state:{
        isCollapse: false , //用于控制左侧菜单收起
        tabsList : [       //面包屑的数据 
            {
                path: '/',
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ] 
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse  = !state.isCollapse
        },
        //修改(更新) 面包屑数据
        selectMenu(state , val ) {
          //判断添加的数据是否为首页
          if(val.name !== 'home'){
              const index = state.tabsList.findIndex(item => item.name === val.name)
              if(index === -1){
                  state.tabsList.push(val)
              }
          }
        },
        //删除指定的Tag数据
        closeTag(state,item){
            console.log(item,'item')
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    }
}