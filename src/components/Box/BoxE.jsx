import PropTypes from "prop-types";

const BoxE = ({ passingYear, degreeTitle, instituteName }) => {
  
  return (
    <div className="flex flex-wrap w-full p-4 box__skill">
      <div className="w-full">
        <p className="text-xl font-black">{degreeTitle}</p>
        <p>{instituteName}</p>
        <p>{passingYear}</p>
      </div>
    </div>
  );
};

BoxE.propTypes = {
  passingYear: PropTypes.string,
  degreeTitle: PropTypes.string,
  instituteName: PropTypes.string
};

export default BoxE;
