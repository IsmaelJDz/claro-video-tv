import { useRef, memo } from "react";
import { useRouter } from "next/router";
import ReactContentLoader from "@/components/skeleton";
import { useObserver } from "@/hooks/useObserver";

import styles from "./card.module.scss";

/**
 *
 * @param {*} props data to show in card
 * @returns movie card or loading skeleton
 */

const Card = props => {
  const {
    id,
    image_base_horizontal,
    title,
    description,
    title_uri,
    unique,
    year,
    duration
  } = props;

  const router = useRouter();
  const [show, element] = useObserver();
  const elDescription = useRef(null);

  /**
   * handleMouseOver
   * @param {*} none
   * Desc: show description on card
   */

  const handleMouseOver = () => {
    if (elDescription.current) {
      elDescription.current.setAttribute("style", "display:block;");
    }
  };

  /**
   * handleMouseOver
   * @param {*} none
   * Desc: hide description on card
   */

  const handleMouseOut = () => {
    if (elDescription.current) {
      elDescription.current.setAttribute("style", "display:none;");
    }
  };

  /**
   * handleChange
   * @param {*} id : movie id
   * @param {*} title_uri : set title_uri on url friendly
   * Desc: push to specific view movie
   */

  const handleClick = (id, title_uri) => {
    const MovieId = id;

    router.push({
      pathname: `/movie/[titlemovie]/[movieid]`,
      query: { titlemovie: `${title_uri}`, movieid: `${MovieId}` }
    });
  };

  return (
    <article
      data-testid="image"
      ref={element}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleClick(id, title_uri)}
      className={styles.Card}
    >
      {show ? (
        <>
          <figure>
            <img
              loading="lazy"
              className={styles.img}
              src={image_base_horizontal}
              alt={title}
            />
          </figure>
          <figcaption
            className={styles.hide + " " + styles.desc}
            ref={elDescription}
          >
            {description}
          </figcaption>
          {unique && (
            <div className={styles.dataCard}>
              <p className={styles.titleCard}>
                {title}
              </p>
              <p>
                Año: { year }
              </p>
              <p>
                duración { duration } Hrs.
              </p>
              <p>
                Ver mas...
              </p>
            </div>
          )}
        </>
      ) : (
        <ReactContentLoader
          peed={2}
          width={425}
          height={340}
          viewBox="0 0 100 80"
          backgroundColor="#333"
          foregroundColor="#555"
          style={{ width: "100%" }}
        />
      )}
    </article>
  );
};

export default memo(Card, (prevState, nextState) => {
  return prevState.unique === nextState.unique;
});
