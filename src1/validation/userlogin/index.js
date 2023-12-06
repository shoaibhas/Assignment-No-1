import Joi from "joi";
const loginValidator = {
  register: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().min(1).max(20).required(),
        email: Joi.string().min(5).max(20).required(),
        password: Joi.string().min(5).max(20).required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(400).json({ message: "invalid data", error });
      }
      next();
    } catch (error) {
      res.status(500).json({ error, message: "something bad happening" });
    }
  },
};
export default loginValidator;
