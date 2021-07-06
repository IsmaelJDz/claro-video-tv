import { useSelector } from "react-redux";

import styles from "./main.module.scss";

import Layout from "../layout";
import Card from "../card";

/**
 *
 * @returns Main movies card
 */

const Main = () => {
  const movies = useSelector(state => state.movies.currentMovies);

  return (
    <Layout>
      <div className={styles.main}>
        {movies.map(movie => (
          <Card {...movie} key={movie.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
