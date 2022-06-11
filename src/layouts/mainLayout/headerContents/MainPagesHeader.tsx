import {FC} from "react";
import {HeaderTitle, MainPagesHeaderBox, UserInfoBox} from "@/layouts/mainLayout/headerContents/style";
import {Avatar, Dropdown, Menu, Space} from "antd";
import {useComputed} from "foca";
import {userModel} from "@/models/userModel";
import {ItemType} from "antd/es/menu/hooks/useItems";
import { LogoutOutlined } from "@ant-design/icons";

const MainPagesHeader:FC = () => {
    const info = useComputed(userModel.displayAvatarInfo)
    const items:ItemType[] = [
        {
            key:"logout",
            label:"退出登录",
            icon:<LogoutOutlined />,
            onClick:async ()=>{
                await userModel.userLogout()
            }
        }
    ]
    const menu=(
        <Menu
            items={items}/>
    )
    return(
        <MainPagesHeaderBox>
            <Space size={16}>
                <img alt={"cyclone"} src={"/assets/svg/cyclone.svg"}/>
                <HeaderTitle>
                    CIRI Transformer
                </HeaderTitle>
            </Space>
            <UserInfoBox>
                <Dropdown overlay={menu} placement="topRight" trigger={['click']}>
                    <Avatar className={'header-avatar'} style={{background:info.color}}>
                        {info.str}
                    </Avatar>
                </Dropdown>
            </UserInfoBox>
        </MainPagesHeaderBox>
    )
}
export default MainPagesHeader