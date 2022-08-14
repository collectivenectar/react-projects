const mongoose = require('mongoose')

const Resource = new mongoose.Schema({
  resourceUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  },
  category: {
    type: String,
    enum: ["react", "node", "express", "mongodb", "html/css", "javascript", "other"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Resource', Resource)
