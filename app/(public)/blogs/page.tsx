'use client';
import CardComponent from "@/components/card";
import React, {useState} from "react";
import {Blog, blogRequest} from "@/utils/types";
import Loader from "@/components/loader";
import getBlogData from "@/app/hooks/get_blogs_data";

export default function BlogPage() {

    const [isLoading, setIsLoading] = useState(true);
    const {blogsData, loading, setBlogsData, error} = getBlogData();


    return (
        <div className={`mx-4 sm:mx-10 lg:mx-24`}>
            <div className={`flex flex-col gap-14`}>
                {loading ? (
                    <Loader />
                ) : (
                    blogsData.map((blog: blogRequest, index: number) => (
                        <CardComponent
                            type={'blog'}
                            key={blog.id}
                            heading={blog.title}
                            time={blog.time}
                            subheading={blog.subtitle}
                            index={(index + 1).toString().padStart(2, '0')}
                            link={blog.link}
                        />
                    ))
                )}
            </div>
        </div>
    );

}