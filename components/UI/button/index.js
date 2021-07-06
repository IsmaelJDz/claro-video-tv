import styles from "./button.module.scss";

const Button = ({ title, handleShare, width }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleShare} width={width}>
        {title}
      </button>
    </div>
  );
};

export default Button;
