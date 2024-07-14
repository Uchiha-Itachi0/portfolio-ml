'use client';

import CardComponent from "@/components/card";
import Loader from "@/components/loader";
import getBlogData from "@/app/hooks/get_blogs_data";
import {blogData} from "@/utils/data";

export default function RecentBlogs() {

    // const {blogsData, loading, setBlogsData, error} = getBlogData();
    // if(loading){
    //     return <Loader />
    // }
    const lastBlog = blogData.at(-1);
    if(!lastBlog){
        return null;
    }
    return (
        <div className={`flex flex-col gap-10 mt-20 sm:mt-40 font-extrabold`}>
            <h1 className={`text-[7vw] sm:text-[6vw] font-extrabold mb-20`}>Recent Blogs</h1>
            <CardComponent
                type={'blog'}
                heading={lastBlog.title}
                time={lastBlog.time}
                subheading={lastBlog.subtitle}
                index={'01'}
                link={lastBlog.link}
            />

        </div>
    )
}