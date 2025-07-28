import Wrapper from "@/components/Card/Wrapper/Wrapper";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "@/types/boardgame";

const MainPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    const response = await axios.get("http://localhost:3005/games");
    console.log(response);
    setGames(response.data.games);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Header />
      <Wrapper games={games} />
    </>
  );
};

export default MainPage;
