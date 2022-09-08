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