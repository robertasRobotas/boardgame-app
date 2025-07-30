import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>Boardgame app</div>
      <nav>
        <ul>
          <li>
            <a href="#">Liked</a>
          </li>
          <li>
            <a href="/insert">Insert</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
