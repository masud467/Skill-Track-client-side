import PropTypes from 'prop-types'; 

const CollaboratorBox = ({label,icon:Icon}) => {
    return (
        <div
      
      className={`flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
   
   hover:text-neutral-800
    transition
    cursor-pointer  `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
    );
};
CollaboratorBox.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.elementType,
  }

export default CollaboratorBox;