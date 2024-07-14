import {Blog} from "@/utils/types";

interface  cardProps {
    type: string;
    index: string;
    time: string;
    heading: string;
    subheading: string;
    link: string;
    tags?: string[];
    admin?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
}
const CardComponent: React.FC<cardProps> = ({type,
                                            index,
                                            heading,
                                            subheading,
                                            link,
                                            tags,
                                            time,
                                            admin = false,
                                            onEdit,
                                            onDelete}) => {


    return (
        <>
            <div>
                <a href={link} className={`flex flex-col gap-10 sm:gap-12`} target="_blank">
                    <div className={`w-full flex`}>
                        <div className={` ${type === 'blog' ? 'bg-green' : 'bg-purple'} translate-y-[50%] h-min rounded-full p-4`}>
                            <h1 className={`text-[5vw] sm:text-[4vw] font-extrabold`} >{index}</h1>
                        </div>
                        <div className={`p-4 flex flex-col gap-4`}>
                            {type === 'blog' && <h1 className={`text-[3vw] sm:text-[2vw] font-bold`}>{time}</h1>}
                            {type === 'project' && <div className={`flex flex-wrap gap-4`}>
                                {tags?.map((tag: string, index: number) => <h1 className={`bg-purple p-2 rounded-lg text-[3vw] sm:text-[2vw] font-bold`}>{tag}</h1>)}
                            </div>}
                            <h1 className={`text-[5vw] sm:text-[4vw] font-extrabold`}>{heading}</h1>
                            <p className={`text-[3vw] sm:text-[2vw]`}>{subheading}</p>
                        </div>
                    </div>
                </a>
                {admin && <div className="flex gap-5 p-4 px-8 justify-end">
                    <button onClick={onEdit} className="p-4 px-8 text-[1.2vw] border-white border-[2px] rounded-lg bg-black">Edit</button>
                    <button onClick={onDelete} className="p-4 px-8 text-[1.2vw] border-red border-[2px] rounded-lg bg-black">Delete</button>
                </div>}
            </div>
            <div className={`mt-4 h-1 bg-white`}></div>

        </>
    )
}

export default CardComponent;