import React from "react";
import Hotel from "./Hotel";
import { Hotels } from "../../data/Hotels";

const HotelContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <h1 className="text-3xl text-[#f51767]">Choose Your Hotel</h1>
      <p className="text-lg">Tap on your favourite</p>
      <div
        className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4"
        id="hotels"
      >
        {Hotels.map((item) => (
          <Hotel
            HotelTitle={item.HotelTitle}
            stars={item.stars}
            HotelSelectedImage={item.HotelSelectedImage}
            HotelImages={item.images}
            priceOnOneDay={item.priceOnOneDay}
            reviews={item.reviews}
            rating={item.rating}
            key={item.HotelTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelContainer;
