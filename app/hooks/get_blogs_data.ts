import makeRequest from "@/utils/requst_handler";
import React from "react";
import {blogRequest, BlogResponse} from "@/utils/types";

const getBlogData = () => {
    const [loading, setLoading] = React.useState(true);
    const [blogData, setBlogData] = React.useState<blogRequest[]>([]);
    const [error, setError] = React.useState<string>('');

    React.useEffect((): void => {
        const fetchBlogData = async (): Promise<void> => {
            setLoading(true);
            try {
                const response: BlogResponse = await makeRequest('blog/', 'get', null, false);
                console.log(response);
                if (response.status === 200) {
                    setBlogData(response.data);
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

        fetchBlogData();
    }, []);

    return { blogsData: blogData, setBlogsData: setBlogData, loading, error };
};

export default getBlogData;