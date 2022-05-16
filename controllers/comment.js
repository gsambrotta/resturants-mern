import Comment from '../models/comment.js'

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
    await res.json(comments)
  } catch (error) {
    res.status(500).send('Error getting coments')
  }
}

export const postComment = async (req, res) => {
  try {
    const { content } = req.body
    const comment = await Comment.create({ content })
    await res.json(comment)
  } catch (error) {
    res.status(500).send('Error posting comment')
  }
}
