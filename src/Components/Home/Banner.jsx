import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="h-96">
          <img
            src="https://i.ibb.co/jhJ6kx0/8184896.jpg"
            className="w-full h-full object-cover"
            alt="banner-1"
          />
        </div>
        <div className="h-96">
          <img
            src="https://i.ibb.co/L6F6yMN/student-online-cute-young-guy-studying-computer-glasses-green-shirt-looking-happy.jpg"
            className="w-full h-full object-cover"
            alt="banner-2"
          />
        </div>
        <div className="h-96">
          <img
            src="https://i.ibb.co/FwbSSr4/2201-w037-n003-155b-p1-155.jpg"
            className="w-full h-full object-cover"
            alt="banner-3"
          />
        </div>
        <div className="h-96">
          <img
            src="https://i.ibb.co/sgL8wMT/old-woman-communicates-with-her-son-via-video-link-through-laptop.jpg"
            className="w-full h-full object-cover"
            alt="banner-4"
          />
        </div>
        <div className="h-96">
          <img
            src="https://i.ibb.co/rMspThR/medium-shot-man-meeting.jpg"
            className="w-full h-full object-cover"
            alt="banner-5"
          />
        </div>
        <div className="h-96">
          <img
            src="https://i.ibb.co/4Pr9kD9/9300512.jpg"
            className="w-full h-full object-cover"
            alt="banner-6"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
