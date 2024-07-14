'use client';

import CardComponent from "@/components/card";
import Loader from "@/components/loader";
import getBlogData from "@/app/hooks/get_blogs_data";

export default function RecentBlogs() {

    const {blogsData, loading, setBlogsData, error} = getBlogData();
    if(loading){
        return <Loader />
    }
    return (
        <div className={`flex flex-col gap-10 mt-20 sm:mt-40 font-extrabold`}>
            <h1 className={`text-[7vw] sm:text-[6vw] font-extrabold mb-20`}>Recent Blogs</h1>
            <CardComponent type={'blog'}
                                   heading={blogsData[0].title}
                                   time={blogsData[0].time}
                                   subheading={blogsData[0].subtitle}
                                   index={'01'}
                                   link={blogsData[0].link} />
        </div>
    )
}