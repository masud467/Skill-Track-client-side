
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DetailsClassCard = ({items}) => {
    return (
        <div>
           <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className=" w-full " src={items?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{items?.title}</h2>
    <p><span className="font-medium">Instructor:</span> {items?.teacher?.name}</p>
    <p><span className="font-medium">Instructor Phone Number:</span> {items?.phone}</p>
    <p><span className="font-medium">Category:</span> {items?.category}</p>
    <p><span className="font-medium">Price:</span>  ${items?.price}</p>
    <p> <span className="font-medium">Description:</span> {items?.description}</p>
    
    <div className="">
      <Link to='/dashboard/payment'><button className="btn btn-primary w-full">Pay</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};
DetailsClassCard.propTypes = {
    items: PropTypes.object,
    refetch: PropTypes.func,
  };
export default DetailsClassCard;