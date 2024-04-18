import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPhoneQuery } from "../slices/phonesApiSlice";
import { IoPlayBack } from "react-icons/io5";
import Loader from "../components/Loader";
const PhoneDetailPage = () => {
  const { phoneId } = useParams();
  const { data, isLoading } = useGetPhoneQuery(phoneId);

  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center font-mono">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[80%] h-[80%] bg-gray-300 flex p-8 rounded-xl gap-4 relative">
          <div className="w-[35rem] flex items-center justify-center">
            <img
              src={data?.phone?.image}
              className="w-full object-cover block rounded-xl"
            />
          </div>
          <div className="flex-grow p-8 bg-white h-[92.3%] self-center rounded-xl w-[50%]">
            <p className="text-3xl font-semibold">{data?.phone?.title}</p>
            <p className="text-2xl mt-4 flex items-center gap-2">
              <span className="font-semibold">Price:-</span>
              <span className="text-xl">Rs {data?.phone?.price}</span>
            </p>
            <h1 className="font-semibold text-[1.6rem] capitazile mt-4">
              Description
            </h1>
            <p className="mt-4 text-xl leading-9">{data?.phone?.description}</p>
          </div>
          <IoPlayBack
            className="absolute text-[1.4rem] cursor-pointer top-[19px] left-[15px] hover:text-gray-500 transition-all duration-300"
            onClick={() => navigate("/")}
            title="Back to home"
          />
        </div>
      )}
    </div>
  );
};

export default PhoneDetailPage;
