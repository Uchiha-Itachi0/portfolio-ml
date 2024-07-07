'use client';
import CardComponent from "@/components/card";
import {useEffect, useState} from "react";
import {Blog} from "@/utils/types";
import {blogs} from "@/utils/data";
import Loader from "@/components/loader";
import makeRequest from "@/utils/requst_handler";

export default function BlogPage() {

    const [recentBlogs, setRecentBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                const response = await makeRequest('blog/', 'get');
                console.log(response);
            }
            catch (e){
                console.error(e);
            }
        }

        fetchBlogs()

    }, [])


    return (
        <div className={`mx-4 sm:mx-10 lg:mx-24`}>
            <div className={`flex flex-col gap-14`}>
                {
                    isLoading ?
                        blogs.map((blog, index) => {
                            return (
                                <CardComponent type={'blog'}
                                               key={index}
                                               heading={blog.title}
                                               time={blog.time}
                                               subheading={blog.subtitle}
                                               index={(index + 1).toString().padStart(2, '0')}
                                               link={blog.link}/>
                            )
                        })
                        :
                        <Loader />
                }
            </div>

        </div>
    )
}