import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../slices/CategorySlice';

const CategoryMenu = () => {

  const [category,setCategories] = useState([]);

  const listUniqueCategory = ()=>{
    const uniqueCategories = [...new Set(FoodData?.map(food=>food?.category))];
    setCategories(uniqueCategories);
  }

  useEffect(()=>{
    listUniqueCategory();
  },[]);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category);
  
  return (
    <div className="mx-6 mt-10">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {category?.map((cat, i) => (
          <button
            onClick={() => dispatch(setCategory(cat))}
            className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === cat && "bg-green-500 text-white"
            }`}
            key={i}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu