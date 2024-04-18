import phoneModel from "../model/phonesModel.js";
import StatusCodes from "http-status-codes";

export const getAllPhones = async (req, res) => {
  const data = await phoneModel.find({});
  res.status(StatusCodes.OK).json({ phones: data });
};

export const addPhones = async (req, res) => {
  const { title, description, image, price } = req.body;
  const newData = await phoneModel.create({ title, description, image, price });
  res.status(StatusCodes.CREATED).json({ message: "Phone added successfully" });
};

export const editPhone = async (req, res) => {
  const { phoneId } = req.params;
  const updatedData = await phoneModel.findByIdAndUpdate(phoneId, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ updatedData });
};
export const getSinglePhone = async (req, res) => {
  const { phoneId } = req.params;
  const phone = await phoneModel.findById(phoneId);
  res.status(StatusCodes.OK).json({ phone });
};

export const deletePhone = async (req, res) => {
  const { phoneId } = req.params;
  await phoneModel.findByIdAndDelete(phoneId);
  res.status(StatusCodes.OK).json({ message: "Phone deleted" });
};
