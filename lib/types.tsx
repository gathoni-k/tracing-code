export interface postMetaProps {
    id: string
    title: string;
    tags: string[];
    description: string;
    date: string;
    slug: string;
}
export interface postProps {
    metadata:postMetaProps,
    markdown:string
}
export interface resource {
    title: string;
    name: string;
    category: string;
    link: string;
    date: string;
}
