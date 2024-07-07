import CardComponent from "@/components/card";

export default function AboutPage() {
    let about = 'Hey, I\'m Anubhav a highly motivated, well-qualified web developer and front-end designer with over 1 year of experience. I am currently a beginner but love to challenge myself, it helps me to improve my skills and I also love to explore new technologies. I\'ve worked on many small projects which helps me to expand my knowledge and learn some new skills.'
    let skills = ['Proficient in Python, JavaScript.', 'Full Stack Developer( MERN ).', 'UI/UX Designer']
    let colorText = ['Anubhav a highly motivated', 'web developer', 'front-end designer', 'but love to challenge myself', 'worked on']
    let color = ['text-blue', 'text-green', 'text-yellow', 'text-red', 'text-purple']
    let regexPattern = new RegExp(`\\b(${colorText.join('|')})\\b`, 'gi');

    let formattedAbout = about.replace(regexPattern, match => {
        let index = colorText.indexOf(match);
        let colorClass = color[index];
        return `<span class="${colorClass}">${match}</span>`;
    });
    return (
        <div className={`mx-4 sm:mx-10 lg:mx-24`}>
            <h1 className={`text-[7vw] sm:text-[6vw] font-extrabold mb-20`}>About</h1>
            <div className={`flex flex-col gap-4 text-[5vw] font-extrabold`}>
                <p dangerouslySetInnerHTML={{ __html: formattedAbout }} />
                <br />
                <h1>
                    My skills:-
                    {skills.map((skill, index) => {
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
    )
}