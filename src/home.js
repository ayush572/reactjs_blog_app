import { useEffect, useState } from "react";
import Blogpost from "./blogs";

const Home = () => {
    const [blogs,setBlog]=useState([
        {title: 'novels', description: 'lorem ipsum...', author: 'abc',id: 1},
        {title: 'mba', description: 'lorem ipsum...', author: 'xyz', id: 2},
        {title: 'web development', description: 'lorem ipsum...', author: 'abc', id: 3},
    ]);
    const handledelete = (id)=>{
        const newblog=blogs.filter((blog)=>blog.id!==id);
        setBlog(newblog);
    }
    useEffect(()=>{
        console.log('useeffect ran!');
        console.log(blogs)
    })
    return ( 
        <div className="home">
            <Blogpost blog={blogs} title="All blogs!" handledelete={handledelete}/>
        </div>
     );
}
 
export default Home;