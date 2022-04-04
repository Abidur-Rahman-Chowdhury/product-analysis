import React from 'react';
import useUserReview from '../../hooks/useUserReview';
import Reviews from '../Reviews/Reviews';

const Review = () => {
  const [user, setUser] = useUserReview();

  return (
      <div>
          <h1 className='text-center text-5xl text-blue-400'>What Our Valuable Customer Says!</h1>
      <div className="grid gap-4 justify-center place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-6">
        {user.map((users) => (
          <Reviews key={users.id} review={users}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Review;
