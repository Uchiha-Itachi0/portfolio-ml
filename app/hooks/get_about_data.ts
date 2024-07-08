import React from "react";
import {aboutRequest, aboutResponse} from "@/utils/types";
import makeRequest from "@/utils/requst_handler";

const getAboutData = () => {

    const [loading, setLoading] = React.useState(true)
    const [aboutData, setAboutData] = React.useState<aboutRequest>({
        content: '',
        skills: [],
        color_text: [],
        colors: []
    })
    const [error, setError] = React.useState<string>('')

    React.useEffect((): void => {

        const fetchAboutData = async (): Promise<void> => {
            setLoading(true)
            try{
                const response: aboutResponse = await makeRequest('about/', 'get', null, false)
                console.log(response)
                if(response.status === 200){
                    setAboutData({
                        content: response.data.content,
                        skills: response.data.skills,
                        color_text: response.data.color_text,
                        colors: response.data.colors
                    })
                }
                else {
                    console.log('Error fetching data')
                    setError('Error fetching data')
                }
            }
            catch (error: any){
                console.error('Error fetching data:', error);
                setError('Error fetching data')
            }
            finally {
                setLoading(false);
            }
        }

        fetchAboutData()

    }, [])


    return { aboutData, setAboutData, loading, error}
}

export default getAboutData;