import { useSelector } from "react-redux";

//import styles from "./main.module.scss";

import Layout from "../../Layout/";
import Card from "../card";

/**
 *
 * @returns Main movies card
 */

const Main = () => {
  const products = useSelector(state => state.products);

  const totalProducts = products.products;

  return (
    <Layout>
      <div>
        {totalProducts.map(product => (
          <Card {...product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;