import blog from "../../data/blog.json";
import BlogCard from "./BlogCard";





const Experience = () => {
  return (
    <div className="w-full md:w-[420px] h-full p-2 md:pl-28 md:pr-10  pt-16">
      <h1 className="text-4xl font-bold pb-10">Blog</h1>
      <div >
      {blog.blog.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
      </div>
    </div>
  )
}

export default Experience