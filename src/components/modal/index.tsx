import React, {FC} from "react";
import {IconTitle, ModalBox} from "@/components/modal/style";
import {ModalProps} from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import classnames from 'classnames';
interface IProps extends ModalProps{
    icon?:"warning"|React.ReactNode
}
const Modal:FC<IProps> = (props) => {
    const {icon,title,children,...restProps}=props
    const renderTitle=():React.ReactNode=>{
        return (
            <IconTitle>
                {icon && <div className={classnames({
                    'modal-title-leading': true,
                    'warning': icon === "warning"
                })}>
                    <ExclamationCircleFilled/>
                </div>}
                <div className={'modal-title'}>
                    {title}
                </div>
            </IconTitle>
        )
    }
    return(
        <ModalBox
            closeIcon={<i className="iconfont icon-close2 ant-modal-close-x" />}
            title={renderTitle()}
            {...restProps}>
            {children}
        </ModalBox>
    )
}
export default Modal