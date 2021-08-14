import { articles } from "../../../data/data.js";

export default function handler(req, res) {
    const id = +req.query.id;
    const filtered = articles.filter(article => article.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
       res.status(404).json({ message:`Articles of id ${id} do not exist` });
    }
}
