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
  const filterMovie = useSelector(state => state.movies.filterMovie);

  return (
    <Layout>
      <div className={styles.main}>
        {
          filterMovie.length === 1 ?
            (
              filterMovie.map(movie => (
                <Card {...movie} key={movie.id} />
              ))
            )
          :
            (
              movies.map(movie => (
                <Card {...movie} key={movie.id} />
              ))
            )
        }
      </div>
    </Layout>
  );
};

export default Main;
