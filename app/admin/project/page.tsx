/*
* Blog page for the admin
* */

'use client'
import React from "react";
import makeRequest from "@/utils/requst_handler";
import Snackbar from "@/components/snack_bar";
import { useRouter } from "next/navigation"
import Loader from "@/components/loader";
import CardComponent from "@/components/card";
import getProjectData from "@/app/hooks/get_project_data";
import {Project, ProjectRequest, ProjectResponse} from "@/utils/types";

interface ErrorResponse {
    [key: string]: string[];
}

export default function AdminProjectPage() {

    const {projectsData, loading, setProjectsData, error} = getProjectData();

    const router = useRouter();

    const [snackbar, setSnackbar] = React.useState({
        show: false,
        message: '',
    })

    const [saveLoading, setSaveLoading] = React.useState<boolean>(false);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [newProject, setNewProject] = React.useState<boolean>(false);
    const [projectData, setProjectData] = React.useState<ProjectRequest>({
        title: '',
        subtitle: '',
        time: '',
        link: '',
        tags: []
    })

    const handleNew = () => {
        setIsEditing(true)
        setNewProject(true)
        setProjectData({
            title: '',
            subtitle: '',
            time: '',
            link: '',
            tags: []
        })
    }

    const editButtonHandler = (project: ProjectRequest) => {
        setIsEditing(true)
        setProjectData(project)

    }

    const handleSave = async () => {
        setSaveLoading(true)
        try {
            let response: ProjectResponse
            if (newProject) {
                response = await makeRequest('project/', 'post', projectData, true)
            } else {
                response = await makeRequest(`project/${projectData?.id}/`, 'put', projectData, true)
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
            let response: ProjectResponse
            response = await makeRequest(`project/${id}/`, 'delete', null, true)
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


    const projects = (
        <div className="p-8">
            {projectsData.map((project: Project, index: number) => {
                return (
                    <CardComponent type={'project'}
                                   key={project.id}
                                   heading={project.title}
                                   time={project.time}
                                   subheading={project.subtitle}
                                   index={(index + 1).toString().padStart(2, '0')}
                                   link={project.link}
                                   tags={project.tags}
                                   admin={true}
                                   onEdit={() => editButtonHandler(project)}
                                   onDelete={() => deleteButtonHandler(project.id)}
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
                        value={projectData.title}
                        onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>

        <div>
            <h1 className="text-[4vw] font-bold">Subtitle</h1>
            <div className="relative w-full">
                    <textarea
                        value={projectData.subtitle}
                        onChange={(e) => setProjectData({...projectData, subtitle: e.target.value})}
                        placeholder="Enter subtitle"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
        <div>
            <h1 className="text-[4vw] font-bold">Time</h1>
            <div className="relative w-full">
                    <textarea
                        value={projectData.time}
                        onChange={(e) => setProjectData({...projectData, time: e.target.value})}
                        placeholder="Enter time"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
        <div>
            <h1 className="text-[4vw] font-bold">Link</h1>
            <div className="relative w-full">
                    <textarea
                        value={projectData.link}
                        onChange={(e) => setProjectData({...projectData, link: e.target.value})}
                        placeholder="Enter link"
                        className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                    />
                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
            </div>
        </div>
        <div>
            <h1 className="text-[4vw] font-bold">Tags</h1>
            <div className="relative w-full">
                    <textarea
                        value={projectData.tags.join(',')}
                        onChange={(e) => setProjectData({...projectData, tags: e.target.value.split(',')})}
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
                isEditing ? textFields : projects

            }

        </>
    )
}