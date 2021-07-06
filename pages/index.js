import MainContainer from "../components/main";
import { useDispatch } from "react-redux";

import { setCurrentMovies } from "../redux/movies/movie.action";

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Main movies container
 */

export default function Home(props) {
  const dispatch = useDispatch();

  const {
    movies: {
      response: { groups }
    }
  } = props;

  dispatch(setCurrentMovies(groups));

  return <MainContainer />;
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34289&region=mexico?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=591825"
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/no-data"
      }
    };
  }

  if (data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      movies: data
    },
    revalidate: 60
  };
}
