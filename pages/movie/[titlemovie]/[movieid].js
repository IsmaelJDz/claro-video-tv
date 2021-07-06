import React from "react";

import { useRouter } from "next/router";

import Loading from "../../../components/loading";
import Layout from "../../../components/layout";
import MovieDetails from "../../../components/movieDetails";

import useSWE from "swr";

/**
 *
 * @returns data from specific movie
 */

export default function Movie() {
  const router = useRouter();

  const { movieid } = router.query;

  const { data, error } = useSWE(
    `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS%20=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${movieid}`
  );

  if (error) {
    <p>Failed to load</p>;
  }

  if (!data) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (data === "undefined" || data.response === null) {
    return (
      <Layout>
        <p>Error...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <MovieDetails {...data} />
    </Layout>
  );
}
