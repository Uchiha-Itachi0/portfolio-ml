import {Blog} from "@/utils/types";

interface  cardProps {
    type: string;
    index: string;
    time: string;
    heading: string;
    subheading: string;
    link: string
}
const CardComponent: React.FC<cardProps> = ({
                                                type,
                                                index,
                                            heading,
                                            subheading,
                                            link,
                                            time}) => {
    return (
        <>
            <a href={link} className={`flex flex-col gap-10 sm:gap-12`} target="_blank">
                <div className={`w-full flex`}>
                    <div className={` ${type === 'blog' ? 'bg-green' : 'bg-purple'} translate-y-[50%] h-min rounded-full p-4`}>
                        <h1 className={`text-[5vw] sm:text-[4vw] font-extrabold`} >{index}</h1>
                    </div>
                    <div className={`p-4 flex flex-col gap-4`}>
                        {type === 'blog' && <h1 className={`text-[3vw] sm:text-[2vw] font-bold`}>{time}</h1>}
                        {type === 'project' && <div className={`flex flex-wrap gap-4`}>
                            <h1 className={`bg-purple p-2 rounded-lg text-[3vw] sm:text-[2vw] font-bold`}>Python</h1>
                            <h1 className={`bg-purple p-2 rounded-lg text-[3vw] sm:text-[2vw] font-bold`}>Ultralyitcs</h1>
                            <h1 className={`bg-purple p-2 rounded-lg text-[3vw] sm:text-[2vw] font-bold`}>Computer Vision</h1>
                            <h1 className={`bg-purple p-2 rounded-lg text-[3vw] sm:text-[2vw] font-bold`}>YOLO</h1>
                        </div>}
                        <h1 className={`text-[5vw] sm:text-[4vw] font-extrabold`}>{heading}</h1>
                        <p className={`text-[3vw] sm:text-[2vw]`}>{subheading}</p>
                        <div className={`mt-4 h-1 bg-white`}></div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default CardComponent;