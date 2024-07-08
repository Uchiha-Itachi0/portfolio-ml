export interface Blog {
    time: string;
    title: string;
    subtitle: string;
    link: string;
}

export interface verifyTokenResponse {
    status: boolean;
    message: string;
}

export interface aboutRequest {
    content: string;
    skills: string[];
    color_text: string[];
    colors: string[];
}
export interface aboutResponse {
    status: number;
    data: {
        content: string;
        skills: string[];
        color_text: string[];
        colors: string[];
    }
}
