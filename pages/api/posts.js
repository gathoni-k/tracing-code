import { getAllPublished } from "../../helpers/notion";
export default async function handler(req, res) {
  const posts = await getAllPublished();
  res.json({ posts });
}
