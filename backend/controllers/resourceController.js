const express = require('express')
const mongoose = require('mongoose')
const Resource = require('../models/resource')

const getResources = async (req, res) => {
  try{
    const resources = await Resource.find({})
    res.status(200).json({
      status: 'success',
      data: {
        resources
      }
      })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

const getOneResource = async (req, res) => {
  try{
    const resource = await Resource.findById(
      req.params.id
    )
    res.status(200).json({
      status: 'success',
      data: {
        resource
      }
      })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

const createResource = async (req, res) => {
  try{
    const newResource = await Resource.create(
      req.body
    )
    res.status(200).json({
      status: 'success',
      data: {
        newResource
      }
      })
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: `invalid request: error ${err}`
    })
  }
}

const updateResource = async (req, res) => {
  try{
    const updateOne = await Resource.findByIdAndUpdate(
      req.params.id, req.body
    )
    res.status(200).json({
      status: 'success',
      data: {
        updateOne
      }
      })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

const deleteResource = async (req, res) => {
  try{
    const deleteOne = await Resource.findByIdAndDelete(
      req.params.id
    )
    res.status(200).json({
      status: 'success',
      data: null
      })
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}


module.exports = { getResources,
getOneResource,
createResource,
updateResource,
deleteResource }
