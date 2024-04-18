import React, { useState } from "react";

import FormRow from "./FormRow";
import {
  useAddProductMutation,
  useEditProductMutation,
} from "../slices/phonesApiSlice";
import toast from "react-hot-toast";
import Loader from "./Loader";
const CreateEditProduct = ({ onCloseModal, productToEdit }) => {
  const toEdit = Boolean(productToEdit?._id);

  const [title, setTitle] = useState(() => (toEdit ? productToEdit.title : ""));
  const [description, setDescription] = useState(() =>
    toEdit ? productToEdit.description : ""
  );
  const [price, setPrice] = useState(() =>
    toEdit ? Number(productToEdit.price) : 0
  );
  const [imageUrl, setImageUrl] = useState(() =>
    toEdit ? productToEdit.image : ""
  );
  const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();
  const [editProduct, { isLoading: isEditingProduct }] =
    useEditProductMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { title, description, price, image: imageUrl };
    try {
      if (toEdit) {
        await editProduct({ phoneId: productToEdit._id, data });
        toast.success("Phone edited to the store");
      } else {
        await addProduct(data).unwrap();
        toast.success("Phone added to the store");
      }
      onCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  }
  return (
    <div className="w-[32rem] h-auto mx-auto ">
      <h1 className="text-[1.8rem] font-bold capitalize">
        {toEdit ? "Edit Product" : "Create product"}
      </h1>
      <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormRow
          label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormRow
          label="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormRow
          label="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormRow
          label="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button className="block w-full py-2 bg-gray-900 text-gray-50 rounded-lg font-semibold">
          {isAddingProduct ? <Loader mutateButton /> : "Submit"}
        </button>
      </form>
      <button
        onClick={onCloseModal}
        className="block w-full py-2 bg-red-800 text-gray-50 rounded-lg font-semibold"
      >
        Cancel
      </button>
    </div>
  );
};

export default CreateEditProduct;
