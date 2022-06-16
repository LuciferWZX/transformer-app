import React, {FC} from "react";
import {
    CollapseBox,
    ComponentDrawerBox,
    DraggableItemBox,
    DrawerHeader,
    GridBox
} from "@/pages/editor/Components/Drawer/style";
import SearchBar from "@/components/modal/SearchBar";
import {CaretRightOutlined} from "@ant-design/icons";
import {useModel} from "foca";
import {editorModel} from "@/models/editorModel";
import DraggableItem from "@/pages/editor/Components/Drawer/DraggableItem";
import {DragOverlay} from "@dnd-kit/core";
import {snapCenterToCursor} from "@dnd-kit/modifiers";
import IconFont from "@/components/icon-font";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
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
                <DraggableItemBox>
                    <IconFont iconName={item.icon}/>{item.name}
                </DraggableItemBox>
            )
        }
        return null
    }
    return(
        <ComponentDrawerBox visible={visible}>
            <div className={'support-box'}>
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
                                    <SortableContext
                                        items={data.map(item=>item.type)}
                                        strategy={horizontalListSortingStrategy}>
                                        <GridBox>
                                            
                                            {data.map((item,index)=>{
                                                return(
                                                    <DraggableItem key={item.type} id={item.type} icon={item.icon}>
                                                        {item.name}
                                                    </DraggableItem>
                                                )
                                            })}
                                
                                        </GridBox>
                                    </SortableContext>
                                </Panel>
                            )
                        })}
                   
                </CollapseBox>
            </div>
            <DragOverlay modifiers={[snapCenterToCursor]} dropAnimation={null}>
                {renderDraggedItem()}
            </DragOverlay>
        </ComponentDrawerBox>
    )
}
export default ComponentDrawer