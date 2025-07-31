import { Game } from "@/types/boardgame";
import styles from "./detailedGame.module.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";

type DetailedGameProps = {
  game: Game;
};

const DetailedGame = ({ game }: DetailedGameProps) => {
  const [isDeleteInitiated, setDeleteInitiated] = useState(false);

  // delete the game, redirect user to the main page

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
          onConfirm={() => console.log("confirm")}
        />
      )}
    </>
  );
};

export default DetailedGame;
