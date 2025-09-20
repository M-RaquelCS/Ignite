"use client"

import 'keen-slider/keen-slider.min.css'

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/app/api/home/get-products";

import Products from "./(products)";


export default function Home() {

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <Products products={products} />
  );
}