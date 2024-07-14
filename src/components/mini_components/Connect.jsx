import React from "react";
import phone from '../../assets/images/optimized/call-icon.webp';
import MailIcon from '../../assets/images/optimized/mail.webp';
import Instagram from '../../assets/images/optimized/Instagram.webp'
import LinkedIn from '../../assets/images/optimized/LinkedIn.webp'

function Connect (){
    return(
        <>  
            <div className="grid grid-cols-4 ">
                <div className="group mr-2 w-10 md:w-12 items-center justify-center">
                    <a href='tel:+919829458909' className="relative cursor-pointer">
                        
                        <span className="relative overflow-hidden bg-skin-primary-shade rounded-full">
                            <img className=" transition-all ease-in-out duration-150 hover:scale-110" width='92px' height='92px' src={phone} alt='Phone AdsRebel' />
                            <label className="absolute h-full w-full text-sm font-normal flex items-center justify-center -bottom-10 group-hover:bottom-10 md:group-hover:bottom-16 opacity-0 group-hover:opacity-100">+918227019000</label>
                        </span>
                    </a>
                </div>

                <div className="group mr-2  w-10 md:w-12 items-center justify-center">
                    <a href='mailto:hello@adsrebel.com' className="relative cursor-pointer">
                    
                        <span className="relative overflow-hidden bg-skin-primary-shade rounded-full">
                            
                            <img className="transition-all ease-in-out duration-150 hover:scale-110" width='92px' height='92px'  src={MailIcon} alt='Mail AdsRebel' />
                            <label className="absolute h-full w-full text-sm font-normal flex items-center justify-center -bottom-10 group-hover:bottom-10 md:group-hover:bottom-16 opacity-0 group-hover:opacity-100">hello@v4mediasolutions.in</label>
                        </span>
                    </a>
                </div>

                <div className="group mr-2  w-10 md:w-12 items-center justify-center">
                    <a href='https://instagram.com/v4mediasolutions' className="relative cursor-pointer">
                    
                        <span className="relative overflow-hidden bg-skin-primary-shade rounded-full">
                            
                            <img className="transition-all ease-in-out duration-150 hover:scale-110" width='92px' height='92px'  src={Instagram} alt='IG Icon' />
                            <label className="absolute h-full w-full text-sm font-normal flex items-center justify-center -bottom-10 group-hover:bottom-10 md:group-hover:bottom-16 opacity-0 group-hover:opacity-100">Instagram</label>
                        </span>
                    </a>
                </div>

                <div className="group mr-2  w-10 md:w-12 items-center justify-center">
                    <a href='https://www.linkedin.com/company/v4mediasolutions' className="relative cursor-pointer">
                    
                        <span className="relative overflow-hidden bg-skin-primary-shade rounded-full">
                            
                            <img className="transition-all ease-in-out duration-150 hover:scale-110" width='92px' height='92px'  src={LinkedIn} alt='L.In Icon' />
                            <label className="absolute h-full w-full text-sm font-normal flex items-center justify-center -bottom-10 group-hover:bottom-10 md:group-hover:bottom-16 opacity-0 group-hover:opacity-100">LinkedIn</label>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Connect;