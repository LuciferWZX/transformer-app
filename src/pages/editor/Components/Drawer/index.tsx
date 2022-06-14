import React, {FC} from "react";
import { CollapseBox, ComponentDrawerBox, DrawerHeader, GridBox} from "@/pages/editor/Components/Drawer/style";
import SearchBar from "@/components/modal/SearchBar";
import {CaretRightOutlined} from "@ant-design/icons";
import {useModel} from "foca";
import {editorModel} from "@/models/editorModel";
import DraggableItem from "@/pages/editor/Components/Drawer/DraggableItem";
import {DragOverlay} from "@dnd-kit/core";

const { Panel } = CollapseBox;
const ComponentDrawer:FC = () => {
    const {containers,components,visible,draggedId} = useModel(editorModel,state => ({
        components:state.components,
        containers:state.componentsContainer,
        visible:state.componentListVisible,
        draggedId:state.draggedId,
    }))
    const closeDrawer=()=>{
        editorModel.updateComponentListVisible(false)
    }
    const renderDraggedItem=()=>{
        const item = components.find(component=>component.type === draggedId)
        if(item){
            return(
                <DraggableItem style={{width:70}} id={item.type} icon={item.icon}>
                    {item.name}
                </DraggableItem>
            )
        }
        return null
    }
    return(
        <ComponentDrawerBox visible={visible}>
            <DrawerHeader>
                <div className={'draw-title'}>组件库</div>
                <div><i className="iconfont icon-close2 modal-close" onClick={closeDrawer} /></div>
            </DrawerHeader>
            <SearchBar/>
                <CollapseBox
                    bordered={false}
                    defaultActiveKey={['DataEntry']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    {containers.map(container=>{
                        const data = components.filter(component=>component.kind === container.type)
                        return(
                            <Panel key={container.type} header={container.name} >
                                <GridBox>
                                    {data.map((item,index)=>{
                                        return(
                                            <DraggableItem key={item.type} id={item.type} icon={item.icon}>
                                                {item.name}
                                            </DraggableItem>
                                        )
                                    })}
                                    
                                </GridBox>
                                <DragOverlay dropAnimation={null}>
                                    {renderDraggedItem()}
                                </DragOverlay>
                            </Panel>
                        )
                    })}
                    
                </CollapseBox>
            
        </ComponentDrawerBox>
    )
}
export default ComponentDrawer