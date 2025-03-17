import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import {addToCart} from '../slices/CartSlice'

const FoodCard = ({ id,img,price,desc,name,rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <>
      
        <div
          className="font-bold w-[250px] p-5 bg-white flex flex-col  rounded-lg gap-2"
          key={id}
        >
          <img
            src={img}
            alt="foodItems"
            className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          />
          <div className="text-sm flex justify-between">
            <h2>{name}</h2>
            <span className="text-green-500">₹{price}</span>
          </div>
          <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
          <div className="flex justify-between">
            <span className="flex justify-center items-center">
              <FaStar className="mr-1  text-yellow-400" />
              {rating}
            </span>
            <button
              className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: id,
                    name: name,
                    img: img,
                    price: price,
                    rating: rating,
                    qty: 1,
                  })
                );
                handleToast(name);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
    </>
  );
};

export default FoodCard