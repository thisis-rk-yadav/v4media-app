import React from "react";

function Page_Switch () {
    return(
        <>
            <div className="w-40 grid grid-cols-2 rounded-full bg-skin-button-accent" >
                <a href="/" className="w-20">
                    <button className="w-20 font-vietnam text-skin-primary p-3 rounded-full text-xs">
                        V4 Media
                    </button> 
                </a>
                
                <a href="/" className="w-20"> 
                    <button className="w-20 text-skin-primary-dark font-vietnam p-3 rounded-full text-xs bg-skin-primary-dark">
                        MailFlow
                    </button>
                </a>
            </div>
        </>
    );
}
export default Page_Switch;