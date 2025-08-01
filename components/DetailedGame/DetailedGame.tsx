import { Game } from "@/types/boardgame";
import styles from "./detailedGame.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";
import { deleteGameById } from "@/pages/api/fetch";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

type DetailedGameProps = {
  game: Game;
};

const DetailedGame = ({ game }: DetailedGameProps) => {
  const router = useRouter();

  const [isDeleteInitiated, setDeleteInitiated] = useState(false);

  const onDeleteGame = async (id: string) => {
    try {
      const response = await deleteGameById(id);

      if (response.status === 200) {
        toast("Game was deleted");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (e) {}
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.imgWrapper}>
          <img src={game.imgUrl} />
        </div>
        <div className={styles.textContent}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <h5>{game.rating}</h5>
          <h5>{game.releaseYear}</h5>
          <h5>{game.dificulty}</h5>
        </div>

        <button onClick={() => setDeleteInitiated(true)}>Delete</button>
      </div>
      {isDeleteInitiated && (
        <ConfirmModal
          title="Do you really want to delete?"
          onCancel={() => setDeleteInitiated(false)}
          onConfirm={() => onDeleteGame(game.id)}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default DetailedGame;
