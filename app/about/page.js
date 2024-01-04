import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl">About page</h1>
      <Link href="/" className="text-teal-900">
        Link to Home Page
      </Link>
    </div>
  );
};

export default About;

// link to a page syntax

{
  /* <Link href=""></Link> */
}
