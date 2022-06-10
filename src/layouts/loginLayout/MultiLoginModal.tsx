import {FC, useState} from "react";
import {Modal} from "@/components";
import {useComputed} from "foca";
import {userModel} from "@/models/userModel";
import {useInterval, useUpdateEffect} from "ahooks";

const MultiLoginModal:FC = () => {
    const [count, setCount] = useState<undefined|number>(undefined);
    const visible = useComputed(userModel.isMultiLogin)
    useUpdateEffect(()=>{
        if(visible){
            setCount(60)
        }else{
            setCount(undefined)
        }
    },[visible])
    useInterval(async () => {
        if(count!==undefined){
            setCount(count - 1);
        }
        if(count===0){
            await close()
        }
    }, count!==undefined?1000:count);
    const renderCount=():string=>{
        return `继续登录（ ${count} ）`
    }
    //点击取消
    const close=async ()=>{
        await userModel.forceLogin('cancel')
    }
    //点击确定
    const ok=async ()=>{
        await userModel.forceLogin('continue')
    }
    return(
        <Modal
            icon={"warning"}
            visible={visible}
            title={"此账号已在其他设备登录"}
            okText={renderCount()}
            onCancel={close}
            onOk={ok}
            maskClosable={false}
            centered={true}
        >
            当前账号已在其他设备登录，继续登录将导致其他设备账号被强制登出，请确认是否继续
        </Modal>
    )
}
export default MultiLoginModal