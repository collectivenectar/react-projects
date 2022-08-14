const express = require('express')
const router = express.Router()
const {
  getResources,
  getOneResource,
  createResource,
  updateResource,
  deleteResource
} = require('../controllers/resourceController')

router.get('/', getResources)

router.get('/:id', getOneResource)

router.post('/', createResource)

router.patch('/:id', updateResource)

router.delete('/:id', deleteResource)

module.exports = router
