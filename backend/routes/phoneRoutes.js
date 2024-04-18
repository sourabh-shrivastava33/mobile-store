import express from "express";
const router = express.Router();
import {
  addPhones,
  deletePhone,
  editPhone,
  getAllPhones,
  getSinglePhone,
} from "../controllers/phonesController.js";
import {
  validateParamsId,
  validatePhoneEditInput,
  validatePhoneInput,
} from "../middlewares/validationMiddleware.js";
router.route("/").get(getAllPhones).post(validatePhoneInput, addPhones);
router
  .route("/:phoneId")
  .get(validateParamsId, getSinglePhone)
  .patch(validateParamsId, validatePhoneEditInput, editPhone)
  .delete(validateParamsId, deletePhone);
export default router;
