import { useEffect, useState } from "react";

const Home = () => {
  const handle = "IIUC";
    const [reFetch, setReFetch]= useState(false);
  useEffect(() => {
    // function body
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
      .then((res) => res.json())
      .then((data) => console.log(data));

      console.log("Hello", reFetch);
  }, [reFetch]);
  return (
    <div>
      <h1>This is Home component of {handle}</h1>
      <button onClick={()=>setReFetch(!reFetch)}>Refetch?</button>
    </div>
  );
};
export default Home;
