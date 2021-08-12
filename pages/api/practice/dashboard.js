const data = {
    post: 33,
    likes: 200,
    comments: 320
};
const handler = (req, res) => {
    res.status(200).json(data);
}

export default handler;