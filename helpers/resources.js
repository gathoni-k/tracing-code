// Should convert to TypeScript after understanding this:https://github.com/makenotion/notion-sdk-js/issues/154
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: "secret_MMbuaGFB29s9BwKk2tgc9NqqvO0xhkhtNi5cRaXdKY2",
});

export const getRecentlyAdded = async () => {
  try {
    const data = await notion.databases.query({
      database_id: "f7acf6d94e914a57ad9f4d214354386e",
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    const resources = data.results.map((resource) => {
      return {
        title: "recently added",
        name: resource.properties.Name.title[0].plain_text,
        category: resource.properties.category.select.name,
        link: resource.properties.link.url,
        date: resource.properties.Date.created_time,
      };
    });
    return resources;
  } catch (error) {
    return [];
  }
};

export const getByCategory = async (category) => {
  try {
    const data = await notion.databases.query({
      database_id: "f7acf6d94e914a57ad9f4d214354386e",
      filter: {
        property: "category",
        select: {
          equals: category,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    const resources = data.results.map((resource) => {
      return {
        title: resource.properties.Name.title[0].plain_text,
        name: resource.properties.Name.title[0].plain_text,
        category: resource.properties.category.select.name,
        link: resource.properties.link.url,
        date: resource.properties.Date.created_time,
      };
    });
    return resources;
  } catch (error) {
    return [];
  }
};
// (async () => {
//   getByCategory("coding");
// })();
