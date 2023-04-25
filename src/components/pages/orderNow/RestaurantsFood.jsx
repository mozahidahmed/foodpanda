import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from '../../../features/api/apiSlice';
import Loading from '../../shared/Loading';


const RestaurantsFood = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetRestaurantByIdQuery(id, {
    pollingInterval: 500,
  });


  if (isLoading) {
    <Loading />;
  }
  if (isSuccess) {
    console.log(data);
  }

   
  return (
    <div className="px-6 py-6">
      <div className="card shadow-xl">
        <img
          src="https://i.ibb.co/nz0km6D/342503319-140442705542636-4010482716675888779-n-1.jpg"
          className="w-full lg:h-[25rem]"
          alt=""
        />
        <div className="py-6 px-2 flex gap-12">
          <h1>
            Delivery Time: <span className="font-bold">45 mins</span>
          </h1>
          <h1>
            Min Order: Tk.<span className="font-bold">{data?.minOrder}</span>
          </h1>
          <h1>
            Delivery Fee: Tk.<span className="font-bold">{data?.delfee}</span>
          </h1>
        </div>
      </div>
      
        <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  px-16 py-6 gap-4">
          {data?.food.map((food) => (
            <>
              <div className="card shadow-xl">
                <img src={food.fimg} alt="aly" />
                <div className="mt-2 p-2">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">{food.fname}</h1>

                    <div className="flex gap-2 items-center">
                      <h1 className="font-bold clas">$ {food.price}</h1>
                    </div>
                  </div>
                  <h1 className="mt-2">{food.ftype}</h1>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="bg-red-500 p-5">
          <h1>Food Name: </h1>
          <h1>price: </h1>
          <h1>Del fee: </h1>
          <h1>total </h1>
          bu
        </div>
      </div>
   
  );
};

export default RestaurantsFood;