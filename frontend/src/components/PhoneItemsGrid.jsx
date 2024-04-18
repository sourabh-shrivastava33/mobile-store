import React from "react";
import { useGetAllPhonesQuery } from "../slices/phonesApiSlice";
import PhoneCard from "./PhoneCard";
import Loader from "./Loader";
const PhoneItemsGrid = () => {
  const { data, isLoading } = useGetAllPhonesQuery();

  return (
    <div
      className={
        isLoading
          ? "flex items-center h-[40rem] justify-center"
          : "grid grid-cols-4 gap-8 justify-items-center mt-8"
      }
    >
      {isLoading ? (
        <Loader />
      ) : data.phones.length > 0 ? (
        data?.phones?.map((el) => <PhoneCard key={el._id} item={el} />)
      ) : (
        <p className="text-[1.5rem] capitalize font-semibold tracking-wide">
          No Products added
        </p>
      )}
    </div>
  );
};

export default PhoneItemsGrid;
