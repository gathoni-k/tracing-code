export interface postFrontMatter {
    title: string
    metaTitle: string
    metaDesc: string
    isPublished: boolean
    publishedDate: string
    tags: string[]
  }
export interface postProps {
    slug: string
    siteTitle: string
    frontmatter: postFrontMatter
    content: any
  }
export interface postProps {
    frontmatter: postFrontMatter
    slug: string
}
export interface iPosts {
    posts: postProps[]
}