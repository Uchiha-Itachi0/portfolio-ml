'use client'
import React from "react";
import Loader from "@/components/loader";
import Snackbar from "@/components/snack_bar";
import getAboutData from "@/app/hooks/get_about_data";

export default function AboutPage() {
    
    const {aboutData, loading, error} = getAboutData();

    const [snackbar, setSnackbar] = React.useState({
        show: false,
        message: '',
    })
    

    let regexPattern = new RegExp(`\\b(${aboutData.color_text.join('|')})\\b`, 'gi');

    let formattedAbout = aboutData.content.replace(regexPattern, match => {
        let index = aboutData.color_text.indexOf(match);
        let colorClass = aboutData.colors[index];
        return `<span class="${colorClass}">${match}</span>`;
    });


    if(loading){
        return <div className="fixed bg-black top-0 bottom-0 left-0 right-0 flex items-center justify-center"><Loader /></div>;
    }

    if (error.length > 0){
        setSnackbar({show: true, message: error})
    }
    return (
        <>
            {snackbar.show && <Snackbar message={snackbar.message} onClose={() => setSnackbar({show: false, message: ''})} />}
            <div className={`mx-4 sm:mx-10 lg:mx-24`}>
                <h1 className={`text-[7vw] sm:text-[6vw] font-extrabold mb-20`}>About</h1>
                <div className={`flex flex-col gap-4 text-[5vw] font-extrabold`}>
                    <p dangerouslySetInnerHTML={{ __html: formattedAbout }} />
                    <br />
                    <h1>
                        My skills:-
                        {aboutData.skills.map((skill, index) => {
                            return (
                                <div className={`flex gap-4`}>
                                    <h1 className={`bg-red rounded-full h-min p-1 text-[4vw] font-extrabold`}>0{index + 1}</h1>
                                    <h1 key={index} className={`text-[4vw] font-extrabold`}>{skill}</h1>
                                    <br />
                                </div>
                            )
                        })}
                    </h1>
                    <br />
                    Exploring more fields to expand my skill set.
                </div>
            </div>
        </>

    )
}