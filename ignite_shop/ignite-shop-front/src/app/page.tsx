"use client"

import Image from "next/image";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import 'keen-slider/keen-slider.min.css'

import { useQuery } from "@tanstack/react-query";
import { useKeenSlider } from "keen-slider/react";
import { getProducts } from "@/app/api/home/get-products";
import tshirt1 from "../assets/tshirts/Shirt/1.png";
import tshirt2 from "../assets/tshirts/Shirt/2.png";
import tshirt3 from "../assets/tshirts/Shirt/3.png";
import tshirt4 from "../assets/tshirts/Shirt/4.png";
import Products from "./(products)";


export default function Home() {
  return (
    <Products />
  );
}