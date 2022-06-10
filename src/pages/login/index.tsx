import {useLayoutEffect} from "react";
import {AccountLink, LoginBox, LoginTitle} from "@/pages/login/style";
import LoginForm from "./LoginForm";
import {Col, Row} from "antd";
import {Modal} from "@/components";

const LoginPage = () => {
    useLayoutEffect(() => {
        console.log("LoginPage")
    }, []);
    return(
        <LoginBox>
            <Modal icon={"warning"}/>
            <Row>
                <Col offset={7} span={17} >
                    <LoginTitle>
                        <div className={'big-title'}>登录</div>
                        <div>请使用你的 CYCLONE <AccountLink>中控账号</AccountLink>进行登录</div>
                    </LoginTitle>
                </Col>
            </Row>
            <LoginForm />
        </LoginBox>
    )
}
export default LoginPage