import React from "react";
import { useGetAllPhonesQuery } from "../slices/phonesApiSlice";
import PhoneCard from "./PhoneCard";
const PhoneItemsGrid = () => {
  const { data, isLoading } = useGetAllPhonesQuery();
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-8 justify-items-center mt-8">
      {isLoading ? (
        "Loading...."
      ) : data.phones.length > 0 ? (
        data?.phones?.map((el) => <PhoneCard key={el._id} item={el} />)
      ) : (
        <p>No Products added</p>
      )}
    </div>
  );
};

export default PhoneItemsGrid;
