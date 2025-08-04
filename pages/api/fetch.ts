import { GameInsert } from "@/types/boardgame";
import axios from "axios";
import Cookies from "js-cookie";

const jwt = Cookies.get("@user_jwt");

const BASE_URL = "https://boardgame-api.onrender.com";

export const getAllGames = async () => {
  const response = await axios.get(`${BASE_URL}/games`, {
    headers: {
      Authorization: jwt,
    },
  });

  return response;
};

export const login = async (loginData: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, loginData);

  return response;
};

export const insertGame = async (game: GameInsert) => {
  const response = await axios.post(`${BASE_URL}/games`, game, {
    headers: { Authorization: jwt },
  });

  return response;
};

export const getGameById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/games/${id}`, {
    headers: { Authorization: jwt },
  });

  return response;
};

export const deleteGameById = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/games/${id}`, {
    headers: { Authorization: jwt },
  });

  return response;
};
