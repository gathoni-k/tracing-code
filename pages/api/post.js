import { getSingleBlogPostBySlug } from "../../helpers/notion";

export const getSinglePostBySlug = async (req, res) => {
  const post = await getSingleBlogPostBySlug(req.params.slug);
  res.json({ post });
};
