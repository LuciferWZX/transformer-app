import {useUpdateEffect} from "ahooks";
import NProgress from "nprogress";
//该hooks只是用来做全局loading的
export const useNProgress=()=>{
    const loading = true
    useUpdateEffect(()=>{
        if(loading){
            NProgress.start();
        }else{
            NProgress.done();
        }
        return ()=>{
            NProgress.done();
        }
    },[loading])
}