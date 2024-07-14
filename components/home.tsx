
'use client'
import Image from "next/image";
import personImage from "../assets/radhamadhav.png"
import mobilePersonImage from "../assets/mobile-home.png"
import {useState} from "react";

export default function LandingPage(){

    const [showImage, setShowImage] = useState(false);

    const handleShowImage = () => setShowImage(!showImage)

    return (
        <>
            <div className={`flex gap-10 sm:gap-0 flex-col sm:flex-row justify-between pt-10 sm:pt-20`}>
                <div className={`flex items-center text-[5vw] w-full sm:w-[60%] font-extrabold leading-[6vw] sm:leading-[7vw] md:leading-[5vw]`}>
                    <h1>I'm your <span className={`text-blue`}>friendly</span> neighborhood <span className={`text-green`}>ML engineer</span>,
                        turning <span className={`text-yellow`}>data into headaches</span> since [year]</h1>
                </div>
                <div className={`${showImage ? 'hidden' : 'block' } flex sm:hidden flex-col items-center gap-10`}>
                    <div className={`${showImage ? 'hidden' : 'block'} w-full bg-pink`}>
                        <Image src={mobilePersonImage} alt={'Code Image to generate person image'}
                               height={350} width={350} className={`rounded-lg h-full w-full`} />
                    </div>
                </div>
                <div className={`${showImage ? 'flex sm:hidden' : 'hidden sm:flex'} justify-center sm:justify-normal relative sm:mr-0 md:mr-16`}>
                    <div className="relative z-30 translate-x-4 sm:translate-x-4 sm:-translate-y-4 lg:translate-x-10 lg:-translate-y-10">
                        <div className={`absolute border-[0.2vw] rounded-lg border-blue w-full sm:w-[26vw] md:w-[22vw] h-full translate-y-10 -translate-x-10`}></div>
                        <div className={`absolute border-[0.2vw] rounded-lg border-green w-full sm:w-[26vw] md:w-[22vw] h-full translate-y-6 -translate-x-6`}></div>
                        <Image
                            className={`relative z-[100] rounded-lg w-full sm:w-[26vw] md:w-[22vw] h-full`}
                            src={personImage}
                            alt="Anubhav Image"
                            height={350}
                            width={350}
                        />
                    </div>
                </div>

            </div>
            <div className="mt-16 w-screen flex sm:hidden items-center justify-center">
            <button onClick={handleShowImage} className="bg-yellow px-4 py-2">{showImage ? 'Remove Image' : 'Show Image'}</button>
        </div>
    </>
    )
}