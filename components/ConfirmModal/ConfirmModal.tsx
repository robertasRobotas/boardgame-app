import styles from "./confirmModal.module.css";
import cross from "../../asstes/cross.svg";

type ConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
};

const ConfirmModal = ({ onCancel, onConfirm, title }: ConfirmModalProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        <button className={styles.closeButton} onClick={onCancel}>
          <img src={cross.src} />
        </button>
      </div>
      <div className={styles.btnWrapper}>
        <button>cancel</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
