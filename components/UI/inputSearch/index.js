import styles from "./input.module.scss";

const InputSearch = ({ handleChange }) => {
  return (
    <div className={styles.mainInput}>
      <input
        type="text"
        name="search"
        className={styles.search}
        pattern=".*\S.*"
        placeholder="buscar"
        onChange={evt => handleChange(evt)}
      />
      <span className={styles.iconSearch}>
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default InputSearch;
