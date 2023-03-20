import  Mock  from "mockjs";
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        //先判断用户是否存在
        //判断账号和密码是否正确
        if (username === 'admin' && password === 'admin') {
            return {
                code: 2000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: "首页",
                            icon: "s-home",
                            url: 'Home.vue',
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mall.vue'
                        },
                        {
                            path: '/User',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'UserManger.vue'
                        },
                        {
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/PageOne',
                                    name: 'PageOne',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'PageOne.vue'
                                },
                                {
                                    path: '/PageTwo',
                                    name: 'PageTwo',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'PageTwo.vue'
                                },
                            ]
                        },
                    ],
                    token: Mock.Random.guid(),
                    message:'截获成功'
                }
            }
        }else if ( username === 'xiaoxiao' && password === 'xiaoxiao' ){
            return{
                code:2000,
                data:{
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: "首页",
                            icon: "s-home",
                            url: "Home.vue",
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mall.vue'
                        },
                    ],
                    token: Mock.Random.guid(),
                    message:'截获成功'
                }
            }
        } else{
            return {
                code:-999,
                data: {
                    message: '密码错误'
                }
            }
        }
    }
}