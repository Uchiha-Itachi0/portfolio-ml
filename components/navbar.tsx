import Link from "next/link";
import handleResumeClicked from "@/utils/resume_button";
// import ResumeButton from "@/components/resume_button";

export default function Navbar(){
    return (
        <nav className={`flex justify-between py-8 px-10 lg:px-24 md:text-[2vw] lg:text-[1.5vw] text-gray-300 font-extrabold`}>
            <div>
                <Link href={'/'}>Neuron</Link>
            </div>
            <div className={`hidden sm:flex gap-8`}>
                <Link href={'/blogs'}>Blog</Link>
                <Link href={'/project'}>Project</Link>
                <Link href={'/about'}>About</Link>
                <Link href={"http://localhost:3000/resume.pdf"} target={'_blank'}>Resume</Link>
                <Link href={'#footer'}>Contact</Link>
            </div>
            <div className={`block sm:hidden `}>Menu</div>
        </nav>
    )
}