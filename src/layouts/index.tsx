import React, {FC} from "react";
import { Outlet } from "react-router-dom";
import {LayoutsBox} from "@/layouts/style";
const Layouts:FC = () => {

    return(
        <LayoutsBox>
            <Outlet/>
        </LayoutsBox>
    )
}
export default Layouts