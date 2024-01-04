"use client";
import DrinksList from "@/components/DrinksList";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //throw an error
  //make sure the response is ok but if it not, do this
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};
const Drinks = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default Drinks;
