import React from "react";
import PageSwitch from "./mini_components/PageSwitch";
import StartProject from './mini_components/StartProject'

function Header () {
    return(
        <>
            <div className="flex p-2 md:p-10">
                <div className="w-2/12">
                <PageSwitch />
                </div>
                <div className="w-6/12 md:w-7/12">

                </div>
                <div className="w-4/12 md:w-3/12">
                    <StartProject />
                </div>
                

            </div>
        </>
    )
}

export default Header;