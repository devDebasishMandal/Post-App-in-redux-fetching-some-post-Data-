

// here we create action creators 
// action creators are the functions which
// return actions as objects 


import { POST_DATA_SUCCESS,POST_DATA_FAILURE,POST_API_STARTED } from "./actionTypes";
// import React from "react";
import axios from "axios";
export const postApiStarted= ()=>{
    return {
        type:POST_API_STARTED
    }
}

export const postDataSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
};

export const postDataFailure = (error) => {
  return {
    type: POST_DATA_FAILURE,
    payload: error,
  };
};


// COMBINING all action creators in a single function and 
// calling a singlefunction whenever required
export function postRequest() {
  return (dispatch) => {
    // dispatch is given by thunk
    dispatch(postApiStarted());
    axios
      .get("https://gauravgitacc.github.io/postAppData/posts.json")
      .then((response) => dispatch(postDataSuccess(response.data)))
      .catch((err) => dispatch(postDataFailure(err.message)));
  };
}