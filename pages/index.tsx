import Wrapper from "@/components/Card/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "@/types/boardgame";
import { useRouter } from "next/router";
import Template from "@/components/Template/Template";
import { getAllGames } from "./api/fetch";

const MainPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  const router = useRouter();

  const fetchGames = async () => {
    try {
      const response = await getAllGames();
      setGames(response.data.games);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        router.push("/login");
      }

      console.log(err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Template>
      <Wrapper games={games} />
    </Template>
  );
};

export default MainPage;
