
import PropTypes from "prop-types";
const DetailsClassCard = ({item}) => {
    return (
        <div>
           <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className=" w-full " src={item?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.title}</h2>
    <p><span className="font-medium">Instructor:</span> {item?.teacher?.name}</p>
    <p><span className="font-medium">Instructor Phone Number:</span> {item?.phone}</p>
    <p><span className="font-medium">Category:</span> {item?.category}</p>
    <p><span className="font-medium">Price:</span>  ${item?.price}</p>
    <p> <span className="font-medium">Description:</span> {item?.description}</p>
    
    <div className="">
      <button className="btn btn-primary w-full">Pay</button>
    </div>
  </div>
</div>
        </div>
    );
};
DetailsClassCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
  };
export default DetailsClassCard;