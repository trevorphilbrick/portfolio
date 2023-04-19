export type BlogPost = {
    title: string;
    content: string;
    createdAt?: {
        seconds: number;
        nanoseconds: number;
    };
    id: string;
    [field: string]: any;
};