import React from "react";
import { useFetch } from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import YourCard from "./components/YourCard";

function App() {
  const {
    data: desserts,
    isPending,
    error,
  } = useFetch("http://localhost:3000/desserts");
  console.log(desserts);
  return (
    <div className="container grid-container">
 <ProductList desserts={desserts} isPending={isPending}/>
      <YourCard />
      <div className="overfollow"></div>
    </div>
  );
}

export default App;
