import {FC, useEffect, useRef} from "react";
import {CaptchaBox, HoverCaptchaBox} from "@/pages/login/style";
import {useDebounceFn, useHover, useInterval, useSize} from "ahooks";
import {userModel} from "@/models/userModel";
import {useComputed, useLoading, useModel} from "foca";
import { SyncOutlined } from "@ant-design/icons";

interface IProps{
    watchData:any|undefined
}
const Captcha:FC<IProps> = (props) => {
    const ref = useRef(null);
    const isHover=useHover(ref)
    const size = useSize(ref);
    const {captcha}=useModel(userModel)
    const count = useComputed(userModel.refreshCaptchaCountDown)
    const loading = useLoading(userModel.queryCaptcha);
 
    const { run } = useDebounceFn(
        async () => {
            await getCaptcha()
        },
        {
            wait: 1000,
            leading:true,
            trailing:false
        },
    );
    //每60秒刷新一次
    useInterval(() => {
        run()
    }, count);
    useEffect(()=>{
        if(count!==undefined && size){
            run()
        }
    },[size,count])
    useEffect(() => {
        if(props.watchData){
            run()
        }
    }, [props.watchData]);
    
    //获取最新的验证码
    const getCaptcha = async ()=>{
        if(size){
            await userModel.queryCaptcha({
                height:size.height,
                width:size.width,
                length:6
            })
        }
    }
    return(
        <CaptchaBox ref={ref} onClick={loading?undefined:run}>
            {captcha?.captcha_image && <img alt={"验证码"} src={captcha.captcha_image} width={'100%'} height={'100%'} />}
            {isHover && (
                <HoverCaptchaBox>
                    <SyncOutlined spin={loading}/>
                </HoverCaptchaBox>
            )}
        </CaptchaBox>
    )
}
export default Captcha