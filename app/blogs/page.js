import Link from "next/link";

export default function Blogs(){

    const blogs = [
        {
            id : 1,
            name: "blog-1",
            description: "blog-1 is good"
            
        },
        {
            id : 2,
            name: "blog-2",
            description: "blog-2 is good"
            
        },
        {
            id : 3,
            name: "blog-3",
            description : "blog-3 is good"
            
        }
    ]
    return (
        <div>

            {
                blogs.map((blog) => (<li key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.name}</Link> <br />
                    {blog.description}
                    </li>))
            }

        </div>
    );
}