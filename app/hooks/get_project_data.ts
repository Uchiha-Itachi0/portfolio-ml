import makeRequest from "@/utils/requst_handler";
import React from "react";
import {Project, ProjectResponse} from "@/utils/types";

const getProjectData = () => {
    const [loading, setLoading] = React.useState(true);
    const [projectsData, setProjectsData] = React.useState<Project[]>([]);
    const [error, setError] = React.useState<string>('');

    React.useEffect((): void => {
        const fetchProjectsData = async (): Promise<void> => {
            setLoading(true);
            try {
                const response: ProjectResponse = await makeRequest('project/', 'get', null, false);
                if (response.status === 200) {
                    setProjectsData(response.data);
                } else {
                    console.log('Error fetching data');
                    setError('Error fetching data');
                }
            } catch (error: any) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchProjectsData();
    }, []);

    return { projectsData, setProjectsData, loading, error };
};

export default getProjectData;