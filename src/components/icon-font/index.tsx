import React, {FC} from "react";
import {IconName} from "@/types/icon";
interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
    iconName?:IconName
}
const IconFont:FC <IProps>= (props) => {
    const {className,children,iconName,...restProps}=props
    return <i className={`iconfont ${props.iconName} ${className ?? ''}`} {...restProps} >{children}</i>
}
export default IconFont