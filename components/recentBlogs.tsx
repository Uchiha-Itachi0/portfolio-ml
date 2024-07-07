'use client';

import CardComponent from "@/components/card";
import {useEffect, useState} from "react";
import {blogs} from "@/utils/data";
import {Blog} from "@/utils/types";
import Loader from "@/components/loader";

export default function RecentBlogs() {

    // Get all the blogs from the database
    const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // Simulating the API call and setting setRecentBlogs
        const timeoutId = setTimeout(() => {
            setRecentBlogs([blogs[0]]);
        }, 3000);

        // Cleanup function
        return () => clearTimeout(timeoutId)
    }, [])


    const isDataLoaded = Boolean(recentBlogs.length > 0);


    return (
        <div className={`flex flex-col gap-10 mt-20 sm:mt-40 font-extrabold`}>
            <h1 className={`text-[7vw] sm:text-[6vw] font-extrabold mb-20`}>Recent Blogs</h1>
            { isDataLoaded ?
                <>
                    <CardComponent type={'blog'}
                                   heading={recentBlogs[0].title}
                                   time={recentBlogs[0].time}
                                   subheading={recentBlogs[0].subtitle}
                                   index={'01'}
                                   link={recentBlogs[0].link} />
                </>
                :
                <Loader />
            }
        </div>
    )
}