使用到的技术
vue2 ,axios,element,vuex,mock(前端模拟后端返回的数据，进行数据的交互),echarts



axios 的二次封装使其更加适用简便，响应拦截器，请求拦截器的定义
详情见views/utils/request.js

echars图标的使用，调用模拟接口显示折线图，柱状图，饼状图的方法，详情见Home.vue中getData()的使用

vuex 中的对数据的处理方法（setter,store 等是之前没有涉及到的）在vue3 的项目中是否会使用到

Tag删除当前标签页使用的方法是删除tagsList 中的当前数据，其中使用到的 mapMutations 方法是之前所没有了解的
需要更进