'use client'
import React from "react";
import { aboutResponse } from "@/utils/types";
import makeRequest from "@/utils/requst_handler";
import Snackbar from "@/components/snack_bar";
import { useRouter } from "next/navigation"
import Loader from "@/components/loader";
import getAboutData from "@/app/hooks/get_about_data";

interface ErrorResponse {
    [key: string]: string[];
}

export default function AdminAboutPage() {
    const { aboutData, loading, setAboutData, error } = getAboutData();
    const router = useRouter();
    const [snackbar, setSnackbar] = React.useState({
        show: false,
        message: '',
    });

    const [saveLoading, setSaveLoading] = React.useState<boolean>(false);

    const handleSave = async (): Promise<void> => {
        setSaveLoading(true);
        try {
            const response: aboutResponse = await makeRequest('about/', 'put', {
                content: aboutData.content,
                skills: aboutData.skills,
                color_text: aboutData.color_text,
                colors: aboutData.colors
            }, true);
            if (response.status === 200) {
                setSnackbar({ show: true, message: 'Data saved successfully' });
                router.push('/about');
            }
        } catch (error: any) {
            console.error('Error saving data:', error);
            const errorResponse: ErrorResponse = error.response.data as ErrorResponse;
            const errorMessages = Object.entries(errorResponse)
                .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                .join(' | ');
            setSnackbar({ show: true, message: errorMessages });
        } finally {
            setSaveLoading(false);
        }
    };

    if (loading || !aboutData.content || saveLoading) {
        return <div className="fixed h-screen w-screen flex items-center justify-center"><Loader /></div>;
    }

    if (error) {
        setSnackbar({ show: true, message: error });
    }

    return (
        <>
            {snackbar.show && <Snackbar message={snackbar.message} onClose={() => setSnackbar({ show: false, message: '' })} />}
            <button onClick={handleSave} className="fixed right-20 top-10 z-10 text-[1.5vw] bg-white text-black rounded-lg p-4 px-20">Save</button>
            <div className="flex flex-col p-8 gap-20">
                <div>
                    <h1 className="text-[4vw] font-bold">About</h1>
                    <div className="relative w-full">
                        <textarea
                            value={aboutData.content}
                            onChange={(e) => setAboutData({ ...aboutData, content: e.target.value })}
                            className="w-full h-[25vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                        />
                        <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
                    </div>
                </div>
                <div>
                    <h1 className="text-[4vw] font-bold">Skills</h1>
                    <div className="relative w-full">
                        <textarea
                            value={aboutData.skills.join(';')}
                            onChange={(e) => setAboutData({ ...aboutData, skills: e.target.value.split(';') })}
                            placeholder="Enter text in comma separated format"
                            className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                        />
                        <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
                    </div>
                </div>
                <div>
                    <h1 className="text-[4vw] font-bold">Color Text</h1>
                    <div className="relative w-full">
                        <textarea
                            value={aboutData.color_text.join(';')}
                            onChange={(e) => setAboutData({ ...aboutData, color_text: e.target.value.split(';') })}
                            placeholder="Enter text in comma separated format"
                            className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                        />
                        <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
                    </div>
                </div>
                <div>
                    <h1 className="text-[4vw] font-bold">Colors</h1>
                    <div className="relative w-full">
                        <textarea
                            value={aboutData.colors.join(';')}
                            onChange={(e) => setAboutData({ ...aboutData, colors: e.target.value.split(';') })}
                            placeholder="Enter text in comma separated format"
                            className="w-full h-[15vw] resize-none bg-black text-[2vw] tracking-wide border-[2px] border-green focus:outline-none p-6"
                        />
                        <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
