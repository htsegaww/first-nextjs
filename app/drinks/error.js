"use client";
import React from "react";

//access the error
const error = (error) => {
  console.log(error);
  return <div>{error.error.message}</div>;
};

export default error;
