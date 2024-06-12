import Collaborators from "../../Components/Collaborators/Collaborators";
import AsTeacher from "../../Components/Home/AsTeacher";
import Banner from "../../Components/Home/Banner";
import Contact from "../../Components/Home/Contact";
import Faq from "../../Components/Home/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Collaborators></Collaborators>
      {/* TODO: some under sections */}
      {/* 1.Create a section to Highlight a few classes or courses that are
currently popular or recommended. Based on highest enrollment or
highest review. (use slider highly recommended)
 */}

 {/* 2.Creating a feedback section */}
 {/* 3.Create a section to show the total users use this website, total
classes,Total student enrollment in your website */}

{/* 4.Create a section for teachers to join your website as a teacher */}
<AsTeacher></AsTeacher>
{/* 5.Added at least 2(two) extra sections on the home page relevant to the
website. */}
<Faq></Faq>
<Contact></Contact>
    </div>
  );
};

export default Home;
