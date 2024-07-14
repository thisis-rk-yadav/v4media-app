import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

function Studio () {
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="my-28 flex p-10 text-3xl md:text-6xl font-medium text-center">
                Email Marketing that promotes your product and drives revenue.
            </div>
            <div>
                <code className="px-10 flex flex-col text-center">
                    Emailing. Reach. Conversions.
                </code>
            </div>
            <div className="md:mt-20">
                <Footer />
            </div>
        </>
    );
}

export default Studio;