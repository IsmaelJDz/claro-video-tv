import Button from "@/components/UI/button";

import styles from "./moviedetails.module.scss";

const MovieDetails = props => {
  const {
    response: {
      group: { common }
    }
  } = props;

  const handleShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${common.large_description} - ${common.title}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className={styles.details}>
      <div className={styles.containerImageDetails}>
        <div className={styles.containerImage}>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src={common.image_large}
              alt={common.title}
            />
            <span className={styles.play}>
              <i className="fas fa-play"> Reproducir</i>
            </span>
          </figure>
          <figcaption className={styles.descImg}>
            {common.large_description}
          </figcaption>
        </div>
        <div className={styles.containerDescription}>
          <h1 className={styles.title}> {common.title} </h1>
          <div className={styles.description}>
            <p> {common.extendedcommon.media.publishyear} </p>
            <p className={styles.code}>
              {common.extendedcommon.media.rating.code}
            </p>
            <p>
              <i className="fas fa-clock"></i> {common.duration}
            </p>
            <p>
              <i className="fas fa-globe-asia"></i>{" "}
              {common.extendedcommon.media.countryoforigin.code}
            </p>
          </div>
          <div className={styles.genres}>
            <p className={styles.genresTitle}>Generos:</p>
            {common.extendedcommon.genres.genre.map(genre => (
              <p key={genre.id}> {genre.desc} </p>
            ))}
          </div>
          <div className={styles.share}>
            <i className="fab fa-twitter"></i>
            <Button title="Compartir" handleShare={handleShare} />
          </div>
        </div>
      </div>
      <div className={styles.containerActors}>
        <p className={styles.talentsTitle}>Talentos: </p>
        {common.extendedcommon.roles.role[0].talents.talent.map(rol => (
          <p className={styles.talents} key={rol.id}>
            <i className="fas fa-user-circle"></i> {rol.fullname}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
