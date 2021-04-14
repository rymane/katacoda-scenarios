const Joi = require('joi');

module.exports = {
  /**
   * Validate that id is a number and the only parameter given in the url.
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   * @param {*} next ::TODO::
   */
  validateID(req, res, next) {
    const { error, } = Joi.object({
      id: Joi.number().required(),
    }).validate(req.params);

    if (error) res.status(400).send({ 
      error: 'You must provide a valid id',
    });
    else next();
  },
  /**
   * Validate that name is a string, matches the name regex and is the only
   * parameter given in the request body.
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   * @param {*} next ::TODO::
   */
  validateName(req, res, next) {
    const nameRegex = new RegExp('^[a-zA-ZåäöÅÄÖ 0-9]{5,32}$');
    const { error, } = Joi.object({
      name: Joi.string().regex(nameRegex).required(),
    }).validate(req.body);

    if (error) res.status(400).send({ 
      error: 'You must provide a valid name',
    });
    else next();
  },
};
