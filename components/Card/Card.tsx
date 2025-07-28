import styles from "./card.module.css";

type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
};

const Card = ({ imgUrl, title, description }: CardProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} />
      </div>
      <div className={styles.data}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
