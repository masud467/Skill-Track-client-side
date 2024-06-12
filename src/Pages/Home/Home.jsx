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
      <Banner></Banner>
      <Collaborators></Collaborators>
  
      {/* 1.Create a section to Highlight a few classes or courses that are
currently popular or recommended. Based on highest enrollment or
highest review. (use slider highly recommended)
 */}
 <PopularCourses></PopularCourses>

 {/* testimonial */}
 <Reviews></Reviews>
 {/* 3.Create a section to show the total users use this website, total
classes,Total student enrollment in your website */}

{/* section for teachers to join my website as a teacher */}
<AsTeacher></AsTeacher>
{/*  2 extra sections  */}
<Faq></Faq>
<Contact></Contact>
    </div>
  );
};

export default Home;
