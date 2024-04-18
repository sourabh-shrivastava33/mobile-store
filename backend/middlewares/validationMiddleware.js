import { validationResult, param, body } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import phoneModel from "../model/phonesModel.js";
import mongoose from "mongoose";
const withValidationError = (validate) => {
  return [
    validate,
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        const errors = result
          .array()
          .map((error) => error.msg)
          .join(",");
        if (errors.includes("Phone not found")) throw new NotFoundError(errors);
        throw new BadRequestError(errors);
      }
      next();
    },
  ];
};

export const validatePhoneInput = withValidationError([
  body("title").notEmpty().withMessage("title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => {
      if (isNaN(Number(value))) {
        throw new Error("Price should be of number type");
      }
      return true;
    }),
  body("image").notEmpty().withMessage("Image is required"),
]);
export const validatePhoneEditInput = withValidationError([
  body("title").optional().notEmpty().withMessage("title is required"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required"),
  body("price")
    .optional()
    .notEmpty()
    .withMessage("Price is required")
    .custom((value) => {
      if (isNaN(Number(value))) {
        throw new Error("Price should be of number type");
      }
      return true;
    }),
  body("image").optional().notEmpty().withMessage("Image is required"),
]);

export const validateParamsId = withValidationError([
  param("phoneId").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error("Invalid id");
    const phone = await phoneModel.findById(value);
    if (!phone) throw new NotFoundError("Phone not found");
    return true;
  }),
]);
