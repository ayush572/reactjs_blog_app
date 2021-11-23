const Blogpost = (props) => {
    const blogs=props.blog;
    const title=props.title;
    const deleteblog=props.handledelete;
    return ( 
        <div className="blogs">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blogposts" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>written by {blog.author}</p>
                <button onClick={()=>deleteblog(blog.id)}>delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default Blogpost;