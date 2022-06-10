import {Alert, Button, Checkbox, Col, Form, Input, Row} from "antd";
import React, {FC, useState} from "react";
import Captcha from "@/pages/login/Captcha";
import {userModel} from "@/models/userModel";
import {useComputed, useLoading} from "foca";
import {ServerResult} from "@/types/request";
interface LoginFormType{
    username:string
    password:string
    captcha?:string
    auto:boolean
}
const LoginForm:FC = () => {
    const [form] = Form.useForm<LoginFormType>();
    const loading = useLoading(userModel.accountLogin);
    const showCaptcha = useComputed(userModel.showCaptcha)
    const [error,setError]=useState<ServerResult<undefined>|undefined>(undefined)
    const username = Form.useWatch('username', form);
    const password = Form.useWatch('password', form);
    const onFinish = async (values:LoginFormType) => {
        setError(undefined)
        const data = await userModel.accountLogin({
            username:values.username,
            password:values.password,
            captcha:values.captcha,
            keep_login:values.auto
        })
        setError(data)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const validUsername=(username:string):void=>{
        form.setFieldsValue({username:username.trim()})
    }
    const validCaptcha=(captcha:string):void=>{
        form.setFieldsValue({captcha:captcha.trim()})
    }
    const renderErrorBanner=():React.ReactNode=>{
        if(error){
            return (
                <Row>
                    <Col offset={7}>
                        <Alert className={'error-alert'} message={error.msg} type="error" showIcon banner={true} />
                    </Col>
                </Row>
            )
        }
        return null
    }
    //渲染验证码
    const renderCaptcha=()=>{
        return(
            <Form.Item label="验证码" >
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[{ required: true, message: '请输入验证码' }]}
                        >
                            <Input onBlur={event => validCaptcha(event.target.value)} placeholder={"验证码"} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Captcha watchData={error} />
                    </Col>
                </Row>
            </Form.Item>
        )
    }
  return(
      <Form
          form={form}
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          initialValues={{
              username:"",
              password:"",
              auto:true,
              captcha:""
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          hideRequiredMark={true}
          colon={false}
      >
          {renderErrorBanner()}
          <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
          >
              <Input placeholder={"用户名"} onBlur={event => validUsername(event.target.value)} allowClear={true} />
          </Form.Item>
        
          <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
          >
              <Input.Password placeholder={"密码"} allowClear={true} />
          </Form.Item>
          {showCaptcha&&renderCaptcha()}
          <Form.Item name="auto" valuePropName="checked" wrapperCol={{ offset: 7, span: 17 }}>
              <Checkbox>保持登录状态</Checkbox>
          </Form.Item>
        
          <Form.Item wrapperCol={{ offset: 7, span: 17 }}>
              <Button disabled={username==="" || password === ""} type="primary" htmlType="submit" block={true} loading={loading}>
                  登录
              </Button>
          </Form.Item>
      </Form>
  )
}
export default LoginForm