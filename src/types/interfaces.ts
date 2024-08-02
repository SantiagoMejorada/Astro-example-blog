export interface Project {
    title: string;
    technology: string;
    year: number;
    github: string;
    image: string;
}

export interface BlogPost {
    title: string;
    author: string;
    date: string;
    authorImage: string;
    mainImage: string;
}

export interface BlogCardProps {
    post: BlogPost & { slug: string; body: string; };
}