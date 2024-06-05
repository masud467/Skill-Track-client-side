/* eslint-disable react/prop-types */


const SectionTitle = ({heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center py-8">
            {/* <p className="text-yellow-500 mb-2">--- {subHeading} ---</p> */}
            <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;