import PropTypes from "prop-types";
import "./Box.css";

const Box = ({ jobPosition, jobDescription, jobFrecuency, jobDate, jobCompany, jobModality }) => {
  
  return (
    <div className="box__skill">
      <div className="w-full position">
        <p className="text-xl font-black">{jobPosition}</p>
        <p>
         {jobCompany}  | { jobModality}
        </p>
        <p>{jobDate}</p>
        <button className="mt-4 boton">{jobFrecuency}</button>
      </div>
      <div className="flex flex-col company">
        <p className="text-xl font-black"> </p>
        <ul>
          {jobDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Box.propTypes = {
  data: PropTypes.object,
};

export default Box;
