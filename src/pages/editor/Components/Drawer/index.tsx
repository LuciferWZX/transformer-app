import React, {FC} from "react";
import {CollapseBox, ComponentDrawerBox, DrawerHeader, GridBox} from "@/pages/editor/Components/Drawer/style";
import SearchBar from "@/components/modal/SearchBar";
import {CaretRightOutlined} from "@ant-design/icons";
import {ItemCard} from "@/components";
import {useModel} from "foca";
import {editorModel} from "@/models/editorModel";
import {ComponentKind} from "@/models/editorModelType";

const { Panel } = CollapseBox;
const ComponentDrawer:FC = () => {
    const {components,visible} = useModel(editorModel,state => ({
        components:state.components,
        visible:state.componentListVisible,
    }))
    const orders:ComponentKind[] = ["Container","DataEntry"]
    
    const closeDrawer=()=>{
        editorModel.updateComponentListVisible(false)
    }
    return(
        <ComponentDrawerBox
            getContainer={false}
            width={217}
            title="Basic Drawer"
            placement={'left'}
            mask={false}
            headerStyle={{display:"none"}}
            visible={visible}>
            <DrawerHeader>
                <div className={'draw-title'}>组件库</div>
                <div><i className="iconfont icon-close2 modal-close" onClick={closeDrawer} /></div>
            </DrawerHeader>
            <SearchBar/>
            <CollapseBox
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                {orders.map(order=>{
                    let data = components[order]
                    return(
                        <Panel key={order} header={data.name} >
                            <GridBox>
                                {data.children.map(item=>{
                                    console.log(item)
                                    return(
                                        <ItemCard key={item.type} icon={item.icon}>
                                            {item.name}
                                        </ItemCard>
                                    )
                                })}
                            </GridBox>
    
                        </Panel>
                    )
                })}
                
            </CollapseBox>
        </ComponentDrawerBox>
    )
}
export default ComponentDrawer