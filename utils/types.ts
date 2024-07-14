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

export interface blogRequest {
    id?: number;
    title: string;
    subtitle: string;
    time: string;
    link: string;
}


export interface BlogData {
    id: number;
    title: string;
    subtitle: string;
    time: string;
    link: string;
}

export interface BlogResponse {
    status: number;
    data: BlogData[];
}

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    time: string;
    link: string;
    tags: string[];
}

export interface ProjectRequest {
    id?: number;
    title: string;
    subtitle: string;
    time: string;
    link: string;
    tags: string[];
}

export interface ProjectResponse {
    status: number;
    data: Project[];
}

