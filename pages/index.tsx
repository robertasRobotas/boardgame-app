import Wrapper from "@/components/Card/Wrapper/Wrapper";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "@/types/boardgame";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const MainPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  const router = useRouter();

  const fetchGames = async () => {
    try {
      const jwt = Cookies.get("@user_jwt");

      const response = await axios.get("http://localhost:3005/games", {
        headers: {
          Authorization: jwt,
        },
      });
      setGames(response.data.games);
    } catch (err) {
      if (err.status === 401) {
        router.push("/login");
      }

      console.log(err);
    }
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
