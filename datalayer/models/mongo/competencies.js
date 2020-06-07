import mongoose from 'mongoose'

const { Schema } = mongoose

const { Types: { ObjectId } } = Schema

const CompetenciesSchema = new Schema({
  name     : { tye: String },
  reference: { type: String },
  createdBy: { ref: 'User', type: ObjectId },
  updatedAt: { type: Date, 'default': new Date() },
  createdAt: { type: Date, 'default': new Date() }
})

const CompetenciesModel = mongoose.model('Competencies', CompetenciesSchema)

export default CompetenciesModel
