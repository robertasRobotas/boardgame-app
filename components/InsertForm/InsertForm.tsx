import { useState } from "react";
import styles from "./insertForm.module.css";
import RangeSelector from "../RangeSelector/RangeSelector";
import { generateRange } from "@/utils/range";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { insertGame } from "@/pages/api/fetch";

const InsertForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [playTimeMin, setPlayTimeMin] = useState("");
  const [bestStartPlayAtAge, setBestStartPlayAtAge] = useState("");
  const [rating, setRating] = useState("");
  const [dificulty, setDificulty] = useState("");
  const [boxSize, setBoxSize] = useState("");
  const [ratingCount, setRatingCount] = useState("");

  const [canPlayPersons, setCanPlayPersons] = useState<[number, number]>([
    5, 10,
  ]);
  const [bestPlayPersons, setBestPlayPersons] = useState<[number, number]>([
    5, 10,
  ]);

  const onInsertBoardgame = async () => {
    try {
      const game = {
        title: title,
        description: description,
        imgUrl: imgUrl,
        releaseYear: Number(releaseYear),
        playTimeMin: Number(playTimeMin),
        bestStartPlayAtAge: Number(bestStartPlayAtAge),
        rating: Number(rating),
        dificulty: Number(dificulty),
        boxSize: boxSize,
        ratingCount: Number(ratingCount),
        canPlayPersons: generateRange(canPlayPersons),
        bestPlayPersons: generateRange(bestPlayPersons),
      };

      const jwt = Cookies.get("@user_jwt");

      const response = await insertGame(game);

      console.log(response);

      if (response && response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Insert game</h1>

      <input
        placeholder="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="img url"
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <input
        placeholder="release year"
        type="text"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />

      <input
        placeholder="playing time"
        type="text"
        value={playTimeMin}
        onChange={(e) => setPlayTimeMin(e.target.value)}
      />

      <input
        placeholder="starting age"
        type="text"
        value={bestStartPlayAtAge}
        onChange={(e) => setBestStartPlayAtAge(e.target.value)}
      />

      <input
        placeholder="rating"
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <input
        placeholder="dificulty"
        type="text"
        value={dificulty}
        onChange={(e) => setDificulty(e.target.value)}
      />

      <input
        placeholder="boxSize"
        type="text"
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      />

      <input
        placeholder="rating count"
        type="text"
        value={ratingCount}
        onChange={(e) => setRatingCount(e.target.value)}
      />

      <RangeSelector
        values={canPlayPersons}
        setValues={setCanPlayPersons}
        label="Persons can play"
      />

      <RangeSelector
        values={bestPlayPersons}
        setValues={setBestPlayPersons}
        label="Best to play"
      />

      <button onClick={onInsertBoardgame}>Insert</button>
    </div>
  );
};

export default InsertForm;
