export type Game = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  releaseYear: number;
  playTimeMin: number;
  bestStartPlayAtAge: number;
  rating: number;
  dificulty: number;
  boxSize: string;
  ratingCount: number;
  canPlayPersons: number[];
  bestPlayPersons: number[];
  cratedAt: Date;
};

export type GameInsert = Omit<Game, "id" | "cratedAt">;
