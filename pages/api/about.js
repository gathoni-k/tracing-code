import { getPageById } from "../../helpers/notion";
export default async function handler(req, res) {
  try {
    const content = await getPageById(`${process.env.ABOUT_ID}`);
    if (!content) {
      return res.status(500).json({ content: null });
    }
    res.json({ content });
  } catch (error) {
    return res.status(500).json({ content: null });
  }
}
