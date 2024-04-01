import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//one function for all three actions now we can call the
//
import { postRequest } from "../redux/actions/postActions";
// import axios from 'axios'

const PostApp = () => {

// The useSelector  allows access to the state stored in a Reduxstore .
//  useDispatch hook enables dispatching of actions to the store.


    const { loading, data, error } = useSelector((state) => state);
      const dispatch = useDispatch(); 


      useEffect(() => {
        dispatch(postRequest());
      }, []);


  return (
    <div>
      <h1> Post App</h1>
      {data.length > 0 &&
        data.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default PostApp;
