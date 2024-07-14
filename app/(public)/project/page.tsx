'use client';
import CardComponent from "@/components/card";
import React, {useEffect, useState} from "react";
import Loader from "@/components/loader";
import getProjectData from "@/app/hooks/get_project_data";
import {Project} from "@/utils/types";

export default function ProjectPage() {

    const [isLoading, setIsLoading] = useState(true);
    const {projectsData, loading, setProjectsData, error} = getProjectData();


    return (
        <div className={`mx-4 sm:mx-10 lg:mx-24`}>
            <div className={`flex flex-col gap-14`}>
                {loading ? (
                    <Loader />
                ) : (
                    projectsData.map((project: Project, index: number) => (
                        <CardComponent
                            type={'project'}
                            key={project.id}
                            heading={project.title}
                            time={project.time}
                            subheading={project.subtitle}
                            index={(index + 1).toString().padStart(2, '0')}
                            link={project.link}
                            tags={project.tags}
                        />
                    ))
                )}
            </div>
        </div>
    );

}