
'use client'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar(){

    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        if (navVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [navVisible]);

    return (
        <>
            <nav className={`flex justify-between py-8 px-10 lg:px-24 md:text-[2vw] lg:text-[1.5vw] text-gray-300 font-extrabold`}>
                <div>
                    <Link href={'/'}>Neuron</Link>
                </div>
                <div className={`hidden sm:flex gap-8`}>
                    <Link href={'/blogs'}>Blog</Link>
                    <Link href={'/project'}>Project</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={"https://anubhav008shukla.netlify.app/resume.pdf"} target={'_blank'}>Resume</Link>
                    <Link href={'#footer'}>Contact</Link>
                </div>
                <button onClick={() => setNavVisible(!navVisible)} className={`block sm:hidden `}>Menu</button>
            </nav>

            {navVisible && <nav className={`fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-[1000] bg-black`}>
                <div className={`relative bg-pink rounded-xl h-[80vh] w-[90vw] flex flex-col justify-center gap-8 py-8 px-10 lg:px-24 md:text-[2vw] lg:text-[1.5vw] text-gray-300 font-extrabold`}>
                    <div onClick={() => setNavVisible(!navVisible)} className={`absolute rounded-bl-[30px] bg-black h-[20vw] w-[20vw] flex items-center justify-center top-0 right-0`}>
                        <span>Close</span>
                        <div className={`absolute bg-black w-[6vw] h-[6vw] top-0 -left-[6vw]`}></div>
                        <div className={`absolute rounded-full bg-pink w-[12vw] h-[12vw] top-0 -left-[12vw]`}></div>
                        <div className={`absolute bg-black w-[6vw] h-[6vw] -bottom-[6vw] right-0`}></div>
                        <div className={`absolute rounded-full bg-pink w-[12vw] h-[12vw] -bottom-[12vw] right-0`}></div>

                    </div>
                    <div>
                        <span className={`mr-6 bg-green translate-y-[50%] h-min rounded-full p-4`}>
                            <span className={`text-[5vw] sm:text-[4vw] font-extrabold`} >01</span>
                        </span>
                        <Link href={'/'} onClick={() => setNavVisible(!navVisible)}>Neuron</Link>
                    </div>
                    <div>
                        <span className={`mr-6 bg-green translate-y-[50%] h-min rounded-full p-4`}>
                            <span className={`text-[5vw] sm:text-[4vw] font-extrabold`} >02</span>
                        </span>
                        <Link href={'/blogs'} onClick={() => setNavVisible(!navVisible)}>Blog</Link>
                    </div>
                    <div>
                        <span className={`mr-6 bg-green translate-y-[50%] h-min rounded-full p-4`}>
                            <span className={`text-[5vw] sm:text-[4vw] font-extrabold`} >03</span>
                        </span>
                        <Link href={'/project'} onClick={() => setNavVisible(!navVisible)}>Project</Link>
                    </div>
                    <div>
                        <span className={`mr-6 bg-green translate-y-[50%] h-min rounded-full p-4`}>
                            <span className={`text-[5vw] sm:text-[4vw] font-extrabold`} >04</span>
                        </span>
                        <Link href={'/about'} onClick={() => setNavVisible(!navVisible)}>About</Link>
                    </div>
                    <div>
                        <span className={`mr-6 bg-green translate-y-[50%] h-min rounded-full p-4`}>
                            <span className={`text-[5vw] sm:text-[4vw] font-extrabold`} >05</span>
                        </span>
                        <Link href={"https://anubhav008shukla.netlify.app/resume.pdf"} target={'_blank'} onClick={() => setNavVisible(!navVisible)}>Resume</Link>
                    </div>
                </div>
            </nav>}
        </>

    )
}