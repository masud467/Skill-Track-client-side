import Collaborators from "../../Components/Collaborators/Collaborators";
import AsTeacher from "../../Components/Home/AsTeacher";
import Banner from "../../Components/Home/Banner";
import Contact from "../../Components/Home/Contact";
import Faq from "../../Components/Home/Faq";
import PopularCourses from "../../Components/Home/PopularCourses";
import Reviews from "../../Components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <div className="pt-28 mb-10">
        <Banner></Banner>
      </div>
      <div>
        <Collaborators></Collaborators>
      </div>

      {/* 1.Create a section to Highlight a few classes or courses that are
currently popular or recommended. Based on highest enrollment or
highest review. (use slider highly recommended)
 */}
      <div className="mt-10">
        <PopularCourses></PopularCourses>
      </div>

      {/* testimonial */}
      <div className="mt-10">
        <Reviews></Reviews>
      </div>
      {/* 3.Create a section to show the total users use this website, total
classes,Total student enrollment in your website */}

      {/* section for teachers to join my website as a teacher */}
      <div className="mt-10">
        <AsTeacher></AsTeacher>
      </div>

      <div className="mt-10">
        <Faq></Faq>
      </div>
      <div className="mt-10">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
