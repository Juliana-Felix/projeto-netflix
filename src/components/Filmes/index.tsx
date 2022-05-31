import history from "../../service/history"; 
import { SigIn } from "../SigIn";
import api from '../../service/api';
import { useEffect, useState } from "react";

export function Filmes() {

  /*const [filme, setfilme] = useState([]);

  useEffect{() => {
    api.get("filme").then((data) => {
      setfilme(data);
    })
    console.log(Filme);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []}

  const handleClickLogin = () => {
    history.push("/signin");
  };*/

  /*const handleClick = () => {
    api.request(
      "http://localhost:8080/filme",
      "GET",
      [],
      (r)=>{
        
        
      }
    )
  }*/

  const handleClick = () => {
    api.request(
      "http://localhost:8080/filme",
      "GET",
      {},
      (r)=>{
        console.log(
          r
        )
      }
    )
    /*fetch("http://localhost:8080/filme").then(response => {
      return response.json()
    })*/
  }

  return (
  
  <>
    <div className="w-[700px] h-96 ml-auto mr-auto bg-white bg-opacity-5 mt-20">
        <h1 className="ml-72 text-xl">Procure um filme</h1>
        <input type="text" placeholder="Título:" className="text-black mt-10 ml-64 h-10 w-52 p-1" />
        <button onClick={handleClick} className="block ml-64 bg-red-500 mt-2 p-1 w-52">Procurar</button>
    </div>
  </>
  
  );
}