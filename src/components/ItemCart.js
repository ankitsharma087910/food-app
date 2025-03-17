import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {MdDelete}  from "react-icons/md" 
import { useDispatch } from 'react-redux'
import { removeFromCart,incrementQty,decrementQty } from '../slices/CartSlice'
import toast from 'react-hot-toast'

const ItemCart = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch();
  const deleteToast = ()=>toast.error(`${name} removed from cart`);
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mt-2" key={id}>
      <img src={img} alt="images of cart" className="w-[50px] h-[50px]" />

      <div className="leading-5 w-full">
        <div className='flex justify-between'>
          <h2 className="font-bold text-gray-800">{name}</h2>
          <MdDelete
            onClick={() => {
              dispatch(removeFromCart({ id }));
              deleteToast(name);
            }}
            title='delete'
            className=" sticky w-10  top-0 right-0 text-gray-700 cursor-pointer hover:text-red-700"
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-end lg:justify-center lg:items-center gap-2 sticky right-0 top-0 w-full">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart