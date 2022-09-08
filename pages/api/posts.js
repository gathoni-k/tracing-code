import { getAllPublished } from "../../helpers/notion";
export default async function handler(req, res) {
  try {
    const posts = await getAllPublished();
    if (!posts) {
      return res.status(500).json({ posts: null });
    }
    res.json({ posts });
  } catch (error) {
    return res.status(500).json({ posts: null });
  }
}
