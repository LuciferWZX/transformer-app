import {engines, store} from "foca";
import {userModel} from "@/models/userModel";
store.init({
    persist:[
        {
            key: `transformer-app_${process.env.NODE_ENV}`,
            version: 1,
            engine: engines.localStorage,
            models: [userModel],
        }
    ],
    // 字符串 redux-devtools 即 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 的缩写
    // 设置 redux-devtools 在生产环境(process.env.NODE_ENV === 'production')下会自动关闭
    // 你也可以安装等效的插件包 @redux-devtools/extension 自由控制
    compose: 'redux-devtools',
})
//开启热更新
if(import.meta.hot){
    import.meta.hot.accept(()=>{
        console.log('热更新: store');
    })
}
console.info("foca 初始化完成")