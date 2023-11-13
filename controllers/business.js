import response from '../utils/response.util.js';
import Business from '../models/BusinessModel.js';

export const createBusiness = async (req, res) => {
  const { alias } = req.body;

  try {
    const business = await Business.create({ alias: alias });

    response({
      statusCode: 201,
      message: 'Create business succesfully',
      datas: business.dataValues,
      res,
    });
  } catch (error) {
    throw new Error(error);
  }
};
