import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const AsTeacher = () => {
  // const { user } = useAuth();
  const [role] = useRole();
  return (
    <div className="">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img
          className="w-1/2 p-5"
          src="https://i.ibb.co/d6wsrhw/elegant-businessman-office.jpg"
          alt="Instructor"
        />
        <div className="card-body">
          <h2 className="card-title">Become an instructor</h2>
          <p>
            Are you passionate about sharing your expertise? Join SkillTrack and
            reach a global audience of motivated students. Earn income by
            teaching subjects you love, with the support and resources you need
            to succeed. Start teaching today and become a part of our vibrant
            learning community. Click the button below to begin your journey
            with SkillTrack.
          </p>
          <div className="mt-4">
            {role === "student" || role === "teacher" ? (
              <Link to="/instructor">
                <button className="btn btn-primary w-full text-xl font-medium">
                  Start teaching today
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-primary w-full text-xl font-medium"
                disabled
              >
                Start teaching today
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsTeacher;
