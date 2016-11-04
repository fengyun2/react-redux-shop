const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  author: String,
  category: {
    name: String,
    url: String
  },
  tags: {
    type: Array,
    default: []
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// get posts by category
postSchema.statics.findByCate = async function (cate) {
  const current_cate = cate ? {
    category: {
      name: cate.name,
      url: cate.url
    }
  } : {}

  const post = await this.find(current_cate).sort({createdAt: -1})

  return post
}

// get posts by id
postSchema.statics.findById = async function (id) {
  const post = await this.findOne({id})

  if (post) {
    return post
  }

  return {status: 'error', msg: '没有找到相关文章'}
}

// save a new post

postSchema.statics.add = async function (post) {
  const posts = await this.find({})
  post.id = posts.length + 1

  const p = await post.save()

  return {
    status: 'success',
    msg: '文章发布成功',
    post
  }
}

const Post = mongoose.model('Post', postSchema, 'Post')

module.exports = Post
