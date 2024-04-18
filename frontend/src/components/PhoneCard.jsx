import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useDeletePhoneProductMutation } from "../slices/phonesApiSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "./Modal";
import CreateEditProduct from "./CreateEditProduct";
const PhoneCard = ({ item }) => {
  const [deleteProduct] = useDeletePhoneProductMutation();
  const navigate = useNavigate();
  async function handleDeleteProduct() {
    try {
      await deleteProduct(item._id);
      toast.success("Phone deleted from store");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  }
  return (
    <div className="w-[20rem] bg-gray-100 flex flex-col rounded-2xl overflow-hidden shadow-lg  p-8 relative">
      <div className="h-[350px] overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt=""
          className="object-cover w-full h-full block  hover:scale-105 transition-all duration-300"
        />
      </div>
      <div>
        <p className="mt-2 flex items-center justify-between">
          <span
            className="text-[1.2rem] cursor-pointer text-gray-900 font-bold capitalize whitespace-nowrap w-[50%] overflow-x-hidden text-ellipsis"
            title={item.title}
          >
            {item.title}
          </span>
          <span className="font-bold text-[1rem]">Rs {item.price}</span>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Modal>
            <Modal.Open name="edit">
              <button className="px-4 py-2  rounded-md bg-gray-950 text-gray-50 w-24 hover:bg-gray-700 hover:shadow-md hover:text-gray-100 transition-all duration-300 ">
                Edit
              </button>
            </Modal.Open>
            <Modal.Window windowName="edit">
              <CreateEditProduct productToEdit={item} />
            </Modal.Window>
          </Modal>
          <button
            className="px-4 py-2  rounded-md bg-red-800 text-gray-50 w-24  hover:bg-red-700 hover:text-gray-100 hover:shadow-md transition-all duration-300"
            onClick={handleDeleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
      <GoArrowUpRight
        className="text-[1.5rem] absolute top-[12.4px] right-[10px] cursor-pointer"
        title="open"
        onClick={() => navigate(`/phone/${item._id}`)}
      />
    </div>
  );
};

export default PhoneCard;
