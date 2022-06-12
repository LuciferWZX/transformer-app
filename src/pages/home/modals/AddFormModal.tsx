import {FC, useState} from "react";
import {Modal} from "@/components";
import {Input} from "antd";
import {FormBox} from "@/pages/home/modals/style";
import {useCreation, useUpdateEffect} from "ahooks";
import {formModel} from "@/models/formModel";
import {useLoading, useModel} from "foca";

const AddFormModal:FC = () => {
    const visible = useModel(formModel,state => state.addFormVisible)
    const [form]=FormBox.useForm<{formName:string}>()
    const formName:string|undefined = FormBox.useWatch("formName",form)
    const [errMsg,setErrMsg]=useState<string>("")
    const loading = useLoading(formModel.createNewForm)
    const disabled = useCreation(()=>{
        if(formName){
            return formName.trim()===""
        }
        return true
    },[formName])
    const formatFormName=(name:string)=>{
        form.setFieldsValue({
            formName:name.trim()
        })
    }
    const ok=()=>{
        form.submit()
    }
    const onFinish=async (values:{formName:string}):Promise<void>=>{
        const result = await formModel.createNewForm(values.formName)
        if(result && result.code === 12006){
            setErrMsg("此表单名已存在")
        }else{
            setErrMsg("")
        }
    }
    const afterClose=()=>{
        form.resetFields()
        setErrMsg("")
    }
    useUpdateEffect(()=>{
        form.validateFields(['formName']).then()
    },[errMsg])
    return(
        <Modal
            width={480}
            visible={visible}
            title={"新建表单"}
            onCancel={()=>formModel.updateAddFormVisible(false)}
            maskClosable={false}
            destroyOnClose={true}
            onOk={ok}
            afterClose={afterClose}
            okButtonProps={{
                disabled:disabled,
                loading:loading
            }}
        >
            <FormBox
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                colon={false}
                form={form}
                onFinish={(values:any)=>onFinish(values)}
                initialValues={{
                    formName:""
                }}
            >
                <FormBox.Item
                    label={"表单名称"}
                    name={"formName"}
                    rules={[
                        {required:true,message:"请输入表单名称"},
                        {whitespace:true,message:"请输入表单名称"},
                        {validator: async () => {
                            if (errMsg!==""){
                                throw new Error(errMsg);
                            }
                        }}
                    ]}
                >
                    <Input onChange={()=>setErrMsg("")} onBlur={(e)=>formatFormName(e.target.value)} maxLength={60} placeholder={"请输入"} allowClear={true} />
                </FormBox.Item>
            </FormBox>
        </Modal>
    )
}
export default AddFormModal