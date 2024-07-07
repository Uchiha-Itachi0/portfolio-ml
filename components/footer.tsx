import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
    return (
        <div id={'footer'}>
            <div className={`flex flex-col items-center justify-center gap-20 mx-4 sm:mx-10 lg:mx-24 mt-20 sm:mt-40 pb-6`}>
                <div className={`w-full sm:w-[80%] lg:w-[65%] text-center font-bold text-[3vw]  sm:text-[2vw] lg:text-[1.3vw]`}>
                    <h1 className={`leading-[5.5vw] sm:leading-[5vw] lg:leading-[3vw] text-[5.5vw] sm:text-[5vw] lg:text-[3vw] font-extrabold`}>Hey <span className={`text-red`}>there!</span> Got something <span className={`text-primary_blue`}>on your mind?</span></h1>
                    <br />
                    <p>Drop me a line and let's chat! Whether it's about web development,
                        Machine Learning, App Development, your favorite tech memes, or just a good old-fashioned brainstorm,
                        I'm all ears. Don't worry, I promise to respond faster than a
                        web page loads on a gigabit connection!</p>
                    <br />
                    <p>Looking forward to hearing from you,</p>
                    <br />
                    <p className={`text-right`}>Anubhav Shukla</p>
                    <br />
                    <p>P.S. If you're a robot, please be nice and use binary code for your message. Thanks!</p>
                </div>
                <div className={`w-full sm:w-[80%] lg:w-[65%]  text-[3vw] sm:text-[2vw] lg:text-[1vw] flex flex-col gap-4`}>
                    <div className={`flex flex-col gap-3`}>
                        <p>Your email</p>
                        <input type="email" placeholder="anubhav008shukla@gmail.com" className={`text-1vw w-full p-4 bg-transparent border-black-white border-[1px] focus:outline-0 rounded-lg`} />

                    </div>
                    <div className={`flex flex-col gap-3`}>
                        <p>Subject</p>
                        <input type="text" placeholder="Good Work" className={`text-1vw w-full p-4 bg-transparent border-black-white border-[1px] focus:outline-0 rounded-lg`} />
                    </div>
                    <div className={`flex flex-col gap-3`}>
                        <p>Message</p>
                        <textarea rows={5} placeholder="Someting nice" className={` text-1vw w-full p-4 rounded-lg border-black-white border-[1px] focus:outline-0 bg-transparent`} />
                    </div>
                </div>

            </div>
            <div className={`flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 mx-4 sm:mx-10 lg:mx-24 mt-20 sm:mt-30 pb-6 text-[16px] sm:text-[4vw] md:text-[2.5vw]`}>
                <div className={`flex items-center justify-center flex-wrap gap-8 text-[16px] sm:text-[2vw] md:text-[1.5vw]`}>
                    <Link href={'/blogs'}>Blog</Link>
                    <Link href={'/project'}>Project</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'http://localhost:3000/resume.pdf'} target={'_blank'}>Resume</Link>
                </div>
                <div className={`flex flex-wrap items-center justify-center sm:flex-row gap-10`}>
                    <a href={'#'}><FaGithub /></a>
                    <a href={'#'}><FaLinkedin /></a>
                    <a href={'#'}><AiFillInstagram /></a>
                </div>
            </div>
        </div>


    )
}