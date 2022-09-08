// Should convert to TypeScript after understanding this:https://github.com/makenotion/notion-sdk-js/issues/154
const { getToday } = require("./getToday");
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const notion = new Client({
  auth: `${process.env.NOTION_TOKEN}`,
});

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: `${process.env.DATABASE_ID}`,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};
const queryDatabaseByTag = async (tag) => {
  const posts = await notion.databases.query({
    database_id: `${process.env.DATABASE_ID}`,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Tags",
          multi_select: {
            contains: `${tag}`,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
};

export const getSingleBlogPost = async (postid) => {
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const response = await notion.pages.retrieve({ page_id: postid });
  const metadata = getPageMetaData(response);
  const mdblocks = await n2m.pageToMarkdown(postid);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    markdown: mdString,
  };
};

export const getSingleBlogPostBySlug = async (slug) => {
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const response = await notion.databases.query({
    database_id: `${process.env.DATABASE_ID}`,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    markdown: mdString,
  };
};
