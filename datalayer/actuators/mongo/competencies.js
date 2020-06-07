import { CompetenciesModel } from '../../models/mongo'

export default class COMPETENCIES {
  async getCompetencies(args, context) {
    try {
      return await CompetenciesModel.find({}).lean()
    } catch (error) {
      throw error
    }
  }
}s
