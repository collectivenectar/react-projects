const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected on: ${connection.connection.host}`)
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
