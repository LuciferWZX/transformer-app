import {EditorCenter, EditorPageBox} from "@/pages/editor/style";
import Canvas from "@/pages/editor/Canvas";
import Dashboard from "@/pages/editor/Dashboard";
import Attribute from "@/pages/editor/Attribute";
import ComponentDrawer from "@/pages/editor/Components/Drawer";

import React from "react";

const EditorPage = () => {

    return(
     
            <EditorPageBox>
                <Dashboard/>
                <EditorCenter>
                    {/*<Components/>*/}
                    <ComponentDrawer/>
                    <Canvas/>
                </EditorCenter>
                
                <Attribute/>
            </EditorPageBox>
    )
}
export default EditorPage