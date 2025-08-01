import Header from "@/components/Header/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DetailedGame from "@/components/DetailedGame/DetailedGame";
import Template from "@/components/Template/Template";
import { getGameById } from "../api/fetch";

const GamePage = () => {
  const router = useRouter();
  const [game, setGame] = useState(null);

  const getDetailedGame = async (id: string) => {
    const jwt = Cookies.get("@user_jwt");

    const response = await getGameById(id);

    setGame(response.data.game);
  };

  useEffect(() => {
    router.query.id && getDetailedGame(router.query.id as string);
  }, [router.query.id]);

  return <Template>{game && <DetailedGame game={game} />}</Template>;
};

export default GamePage;
