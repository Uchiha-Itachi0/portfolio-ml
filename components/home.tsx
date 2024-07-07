import Image from "next/image";
import personImage from "../assets/radhamadhav.png"
import mobilePersonImage from "../assets/mobile-home.png"

export default function LandingPage(){
    return (
        <div className={`flex gap-10 sm:gap-0 flex-col sm:flex-row justify-between pt-10 sm:pt-20`}>
            <div className={`flex items-center text-[5vw] w-full sm:w-[60%] font-extrabold leading-[6vw] sm:leading-[7vw] md:leading-[5vw]`}>
                <h1>I'm your <span className={`text-blue`}>friendly</span> neighborhood <span className={`text-green`}>ML engineer</span>,
                    turning <span className={`text-yellow`}>data into headaches</span> since [year]</h1>
            </div>
            <div className={`flex sm:hidden flex-col items-center gap-10`}>
                <div className={`w-full bg-pink`}>
                    <Image src={mobilePersonImage} alt={'Code Image to generate person image'}
                           height={350} width={350} className={`rounded-lg h-full w-full`} />
                </div>
                <div className="w-max">
                    <button className="bg-yellow px-4 py-2">Show Image</button>
                </div>

            </div>
            <div className="hidden sm:flex justify-center sm:justify-normal relative sm:mr-0 md:mr-16">
                <div className={`absolute border-[0.2vw] rounded-lg border-blue w-[20vw] sm:w-[26vw] md:w-[22vw] h-full `}></div>
                <div className={`absolute border-[0.2vw] rounded-lg border-green w-[20vw] sm:w-[26vw] md:w-[22vw] h-full translate-x-2 -translate-y-2 lg:translate-x-5 lg:-translate-y-5`}></div>
                <div className="relative z-30 translate-x-4 -translate-y-4 lg:translate-x-10 lg:-translate-y-10">
                    <Image
                        className={`rounded-lg w-full sm:w-[26vw] md:w-[22vw] h-full`}
                        src={personImage}
                        alt="Anubhav Image"
                        height={350}
                        width={350}
                    />
                </div>
            </div>
        </div>
    )
}