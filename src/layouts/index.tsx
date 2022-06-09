import React, {FC, useState, useEffect, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import {LayoutsBox} from "@/layouts/style";
const Layouts:FC = () => {
    
    useLayoutEffect(() => {
        console.log("Layouts")
    }, []);
    
    return(
        <LayoutsBox>
            <Outlet/>
        </LayoutsBox>
    )
}
export default Layouts