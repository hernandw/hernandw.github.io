import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="flex align-center justify-center gap-8 bg-red-400 h-auto">
      {SocialShare.map((val, i) => (
        <>
          <div className="border-2 p-2 rounded-full hover:bg-[#dfa400]" key={i}>
            <a  href={`${val.link}`} rel="noreferrer" target="_blank">
              {val.Social}
            </a>
          </div>
        </>

      ))}
    </div>
  );
};

export default Social;