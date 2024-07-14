/*
* Blog page for the admin
* */

'use client'
import React from "react";
import {BlogData, blogRequest, BlogResponse} from "@/utils/types";
import makeRequest from "@/utils/requst_handler";
import Snackbar from "@/components/snack_bar";
import { useRouter } from "next/navigation"
import Loader from "@/components/loader";
import getBlogData from "@/app/hooks/get_blogs_data";
import CardComponent from "@/components/card";

interface ErrorResponse {
    [key: string]: string[];
}

export default function AdminBlogPage() {

    const {blogsData, loading, setBlogsData, error} = getBlogData();
    const router = useRouter();
    const [snackbar, setSnackbar] = React.useState({
        show: false,
        message: '',
    })

    const [saveLoading, setSaveLoading] = React.useState<boolean>(false);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [newBlog, setNewBlog] = React.useState<boolean>(false);
    const [blogData, setBlogData] = React.useState<blogRequest>({
        title: '',
        subtitle: '',
        time: '',
        link: ''
    })

    const handleNew = () => {
        setIsEditing(true)
        setNewBlog(true)
        setBlogData({
            title: '',
            subtitle: '',
            time: '',
            link: ''
        })
    }

    const editButtonHandler = (blog: blogRequest) => {
        console.log("Called")
        setIsEditing(true)
        setBlogData(blog)

    }

    const handleSave = async () => {
        setSaveLoading(true)
        try {
            let response: BlogResponse
            if (newBlog) {
                response = await makeRequest('blog/', 'post', blogData, true)
            } else {
                response = await makeRequest(`blog/${blogData.id}/`, 'put', blogData, true)
            }
            if (response.status === 200 || response.status === 201) {
                setSnackbar({show: true, message: 'Data saved successfully'})
                window.location.reload();
            }
        } catch (error: any) {
            console.error('Error saving data:', error);
            const errorResponse: ErrorResponse = error.response.data as ErrorResponse;

            // Handling all the error message at the same time
            const errorMessages = Object.entries(errorResponse)
                .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                .join(' | ');
            console.log(errorMessages);
            setSnackbar({show: true, message: errorMessages});

        } finally {
            setSaveLoading(false);
        }
    }

    const deleteButtonHandler = async (id:number | undefined) => {
        setSaveLoading(true)
        try {
            let response: BlogResponse
            response = await makeRequest(`blog/${id}/`, 'delete', null, true)
            if (response.status === 204) {
                setSnackbar({show: true, message: 'Data Deleted successfully'})
                window.location.reload();
            }
        } catch (error: any) {
            console.error('Error saving data:', error);

            setSnackbar({show: true, message: error.response.data});

        } finally {
            setSaveLoading(false);
        }
    }


    const blogs = (
        <div className="p-8">
            {blogsData.map((blog: blogRequest, index: number) => {
                return (
                    <CardComponent type={'blog'}
                                   key={blog.id}
                                   heading={blog.title}
                                   time={blog.time}
                                   subheading={blog.subtitle}
                                   index={(index + 1).toString().padStart(2, '0')}
                                   link={blog.link}
                                   admin={true}
                                   onEdit={() => editButtonHandler(blog)}
                                   onDelete={() => deleteButtonHandler(blog.id)}
                    />
                )
            })}
        </div>
    )

    const textFields = (<div className="flex flex-col p-8 gap-20">
        <div>
            <h1 className="text-[4vw] font-bold">Title</h1>
            <div className="relative w-full">
                    <textarea
                        placeholder="Enter title"
                        value={blogData.title}
                        onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>

        <div>
            <h1 className="text-[4vw] font-bold">Skills</h1>
            <div className="relative w-full">
                    <textarea
                        value={blogData.subtitle}
                        onChange={(e) => setBlogData({...blogData, subtitle: e.target.value})}
                        placeholder="Enter subtitle"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
        <div>
            <h1 className="text-[4vw] font-bold">Color Text</h1>
            <div className="relative w-full">
                    <textarea
                        value={blogData.time}
                        onChange={(e) => setBlogData({...blogData, time: e.target.value})}
                        placeholder="Enter time"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
        <div>
            <h1 className="text-[4vw] font-bold">Colors</h1>
            <div className="relative w-full">
                    <textarea
                        value={blogData.link}
                        onChange={(e) => setBlogData({...blogData, link: e.target.value})}
                        placeholder="Enter link"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
    </div>)
    if (loading || saveLoading){
        return <div className="fixed h-screen w-screen flex items-center justify-center"><Loader /></div>;
    }

    if(error){
        setSnackbar({show: true, message: error})
    }
    return (
        <>
            {snackbar.show && <Snackbar message={snackbar.message} onClose={() => setSnackbar({show: false, message: ''})} />}
            <button onClick={isEditing ? handleSave : handleNew} className="fixed right-20 top-10 z-10 text-[1.5vw] bg-white text-black rounded-lg p-4 px-20">{isEditing ? 'SAVE' : 'NEW'}</button>
            {
                isEditing ? textFields : blogs

            }

        </>
    )
}