
import SectionTitle from "../SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonial"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 flex flex-col justify-center items-center space-y-2">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p>{review.details}</p>
              <p className="text-orange-600 uppercase">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;