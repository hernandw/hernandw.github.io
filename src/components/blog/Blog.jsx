import blog from "../../data/blog.json";
import BlogCard from "./BlogCard";





const Blog = () => {
  return (
    <div className="w-full md:w-full h-full p-2 md:pl-28 md:pr-10  pt-16">
      <h1 className="text-4xl font-bold pb-10">Blog</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-8">
      {blog.blog.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
      </div>
    </div>
  )
}

export default Blog