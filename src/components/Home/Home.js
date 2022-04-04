import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../assets/image/foodImage.jpg';
import useUserReview from '../../hooks/useUserReview';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  const [user, setUser] = useUserReview();
  const reviews = user.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1  gap-y-2 md:grid-cols-2 h-[40vh] justify-center items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-6xl font-extrabold">
            Taste The Best
            <span className="text-yellow-400 font-serif"> Food</span>
          </h1>
          <p className='mt-4 text-xl text-gray-500 text'>We are in the city to give you best food with best taste. We provide you best quality food in reasonable price.Please pay a visit to our restaurant and grab your favorite foods.</p>
        </div>
        <div className=" mt-7 order-1 md:order-2">
          <img
            src={food}
            className=" w-80 border-2 p-2 rounded-2xl mx-auto"
            alt=""
          />
        </div>
      </div>

      <div className="mt-40">
        <h1 className="text-center text-5xl font-mono font-bold">
          Customer Review
        </h1>

        <div className="grid gap-4 justify-center place-items-center  grid-cols-1 md:grid-cols-3 mt-10 mb-6">
          {reviews.map((review) => (
            <Reviews key={review.id} review={review}></Reviews>
          ))}
        </div>
        <div className="w-[200px] h-11 bg-blue-400 mx-auto flex justify-center items-center mb-4 rounded-lg">
          <Link
            to="/reviews"
            className="cursor-pointer text-xl text-white font-bold "
          >
            See All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
