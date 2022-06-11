import {FC, useState} from "react";
import {HomeHeaderBox} from "@/pages/home/style";

import {formModel} from "@/models/formModel";
import {useModel} from "foca";
import {useUpdateEffect} from "ahooks";
import anime from "animejs";

const HomeHeader:FC = () => {
    const total = useModel(formModel,(state)=>state.totalCount)
    const [count,setCount]=useState<number>(total)
    useUpdateEffect(()=>{
        anime({
            targets: '.total-num',
            innerHTML: [count, total],
            easing: 'linear',
            duration:300,
            round: 1 // Will round the animated value to 1 decimal
        });
        setCount(total)
    },[total])

    return(
        <HomeHeaderBox>
            <div className={'header-title'}>
                我的表单(<span className={'total-num'}>{total}</span>)
            </div>
        </HomeHeaderBox>
    )
}
export default HomeHeader