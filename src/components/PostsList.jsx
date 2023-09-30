import React, {useState, useEffect} from "react";
import useFetcher from "../hook/useFetcher";
import { HttpRequests } from "../http";

const PostsList = () => {
  const { data, error, loading } = useFetcher(HttpRequests.getPosts);
  const [posts, setPosts] = useState(data)

  useEffect(()=>{
    setPosts(data)
  },[data])

  const sort = (sortQuery) => {
    setPosts([...posts].sort((a,b) => a[sortQuery] > b[sortQuery] ? 1 : -1));
  }
  return (
    <div>
      <button onClick={()=>sort('title')} className="sortbytitle sort">Sort By Title</button>
      <button onClick={()=>sort('body')} className="sortbybody sort">Sort By Body</button>
      {posts?.map((item) => (
        <div key={item.id}>
          <h2 className="posttitle">{item.id}: {item.title}</h2>
          <h3 className="posttext">{item.body}</h3>
        </div>
      ))}
    </div>
  );
};
export default PostsList;
