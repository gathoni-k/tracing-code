import { queryDatabaseByTag } from "../../helpers/notion";

export const getPostsByTag = async (req, res) => {
  const posts = await queryDatabaseByTag(req.query.tag);
  res.json({ posts });
};
