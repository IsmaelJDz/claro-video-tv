import { useRouter } from "next/router";

import MovieDetails from "@/components/movieDetails"
import Layout from "@/components/layout";

import getData from "@/utils/index";


/**
 *
 * @param {*} api -> EndPoint -> url"
 * @returns array dynamic paths
 */

export const getStaticPaths = async () => {
  const resMoviesPaths = await getData(
    "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34289&region=mexico?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=591825"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const { response: { groups } } = resMoviesPaths;

  const paths = groups.map(item => ({
    params: {
      movieid: item.id.toString(),
      titlemovie: item.title_uri.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};

/**
 *
 * @param {*} api -> EndPoint -> url "should be specified 'id'"
 * @returns specific data by id product
 */

export async function getStaticProps({ params }) {

  const data = await getData(
    `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS%20=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${params.movieid}`
  ).catch(err => {
    console.log("ERROR", err);
  });

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
      movie: data
    },
    revalidate: 60
  };
}

const ProductName = ({ movie }) => {

  return (
    <Layout>
      <MovieDetails {...movie} />
    </Layout>
  );
};

export default ProductName;