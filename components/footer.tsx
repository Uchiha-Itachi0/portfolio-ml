'use client'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Snackbar from "@/components/snack_bar";
import React from "react";
export default function Footer() {

    const email = "anubhav008shukla@gmail.com";
    const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setShowSnackbar(true);
        }).catch((error) => {
            console.error("Error copying email to clipboard: ", error);
        });
    };

    return (
        <div id={'footer'}>
            {showSnackbar && <Snackbar message={'Email copied to clipboard'} onClose={() => setShowSnackbar(false)} />}
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
                    <br />
                    <p className="underline cursor-pointer" onClick={copyToClipboard}>{email}</p>
                </div>

            </div>
            <div className={`flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 mx-4 sm:mx-10 lg:mx-24 mt-20 sm:mt-30 pb-6 text-[16px] sm:text-[4vw] md:text-[2.5vw]`}>
                <div className={`flex items-center justify-center flex-wrap gap-8 text-[16px] sm:text-[2vw] md:text-[1.5vw]`}>
                    <Link href={'/blogs'}>Blog</Link>
                    <Link href={'/project'}>Project</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'https://anubhav008shukla.netlify.app/resume.pdf'} target={'_blank'}>Resume</Link>
                </div>
                <div className={`flex flex-wrap items-center justify-center sm:flex-row gap-10`}>
                    <a href={'https://github.com/Uchiha-Itachi0'}><FaGithub /></a>
                    <a href={'https://www.linkedin.com/in/anubhav008shukla/'}><FaLinkedin /></a>
                    <a href={'https://www.instagram.com/anubhav008shukla/'}><AiFillInstagram /></a>
                </div>
            </div>
        </div>


    )
}