const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  id: Number,
  url: String,
  name: String,
  index: {
    type: Number,
    default: 1
  }
})

categorySchema.statics.findAll = async function () {
  const cates = await this.find()
  return cates
}

categorySchema.statics.findByUrl = async function (url) {
  const cate = await this.findOne({
    url
  })

  if (cate) {
    return cate
  }

  return {
    status: 'error',
    msg: '此分类不存在'
  }
}

// save a new category
categorySchema.statics.add = async function (cate) {
  const cates = await this.find({})
  cate.id = cates.length + 1

  await cate.save()

  return {
    status: 'success',
    msg: '分类文章发布成功',
    cate
  }
}
const Category = mongoose.model('Category', categorySchema, 'Category')
module.exports = Category
