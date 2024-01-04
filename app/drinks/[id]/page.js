import Link from "next/link";
import React from "react";
import Image from "next/image";
import drinkImg from "./drink.jpg";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  //check the response
  if (!response.ok) {
    throw new Error("could not fetch JSON");
  }
  return response.json();
};
const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* if we do this, the image takes longer to load. so, we need to use image component from NextJs. */}
      {/* <img src={drinkImg.src} /> */}
      {/* <Image src={drinkImg} className="w-48 h-48 rounded" /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
