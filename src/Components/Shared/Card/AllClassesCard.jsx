import PropTypes from "prop-types";

const AllClassesCard = ({item}) => {
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className=" h-56" src={item?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.title}</h2>
    <p><span className="font-medium">Instructor:</span> {item?.teacher?.name}</p>
    <p><span className="font-medium">Price:</span>  ${item?.price}</p>
    <p> <span className="font-medium">Description:</span> {item?.description}</p>
    <p> <span className="font-medium">Total enrolment:</span></p>
    <div className="">
      <button className="btn btn-primary w-full">Enroll</button>
    </div>
  </div>
</div>
        </div>
    );
};

AllClassesCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
  };

export default AllClassesCard;