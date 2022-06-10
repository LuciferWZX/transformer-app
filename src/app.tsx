
import {Navigate, Route,Routes} from "react-router-dom"
import Layouts from "@/layouts"
import MainLayout from "@/layouts/mainLayout"
import LoginLayout from "@/layouts/loginLayout"
import HomePage from "@/pages/home"
import LoginPage from "@/pages/login"
import SettingPage from "@/pages/setting"
import "@/styles/global.less"
import Auth from "@/wrappers/auth";
import LoginAuth from "@/wrappers/loginAuth";
const App = () => {
    return(
        <Routes>
            <Route  path={'/'} element={<Layouts/>} >
                <Route element={<Auth><MainLayout/></Auth>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'setting'} element={<SettingPage/>}/>
                </Route>
                <Route path={'login'} element={<LoginAuth><LoginLayout/></LoginAuth>}>
                    <Route index element={<LoginPage/>}/>
                </Route>
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}
export default App