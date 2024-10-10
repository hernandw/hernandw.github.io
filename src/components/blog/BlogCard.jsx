import { format } from "@formkit/tempo"
import { Link } from "react-router-dom"
const BlogCard = ({title, src,date, author, description, code}) => {
  return (
    <div>
        <div>
        <img className="w-full transform transition-transform duration-300 hover:translate-y-[-10px] hover:grayscale" src={src} alt={title} />
    </div>
    <p className=" text-sm text-gray-400 py-4">{format(date, "long", "en-US")} by {author}</p>
    <Link to={code} target="_blank" className=" text-white font-bold p-2  lg:mt-4  hover:text-[#dfa400] text-center">{title}</Link>
    <p className="py-4">{description}</p>
    </div>
  )
}

export default BlogCard