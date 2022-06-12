import React, {FC, useState} from "react";
import {ActionBarBox} from "@/pages/home/style";
import {Button, Input} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {useModel} from "foca";
import {formModel} from "@/models/formModel";
import { useDebounceEffect } from "ahooks";

const ActionBar:FC = () => {
    const key = useModel(formModel,(state)=>state.formParams.key)
    const [value, setValue] = useState<string>(key);
    //为 useEffect 增加防抖的能力
    useDebounceEffect(() => {
            formModel.updateFormParams({
                key:value
            })
        }, [value], {wait: 500});
    const changeFilterVal=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return(
        <ActionBarBox>
            <Input
                value={value}
                onChange={changeFilterVal}
                prefix={<SearchOutlined className={'search-icon'} />}
                className={'action-input'}
                placeholder="搜索"
                allowClear={true} />
            <Button onClick={()=>formModel.updateAddFormVisible(true)} icon={<PlusOutlined />} type={"primary"}>新建表单</Button>
        </ActionBarBox>
    )
}
export default ActionBar