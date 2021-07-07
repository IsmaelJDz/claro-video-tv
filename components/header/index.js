import React, { useState, useRef, memo } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Image from "next/image";

import Navigation from "@/components/navigation";
import Button from "@/components/UI/button";
import InputSearch from "@/components/UI/inputSearch";

import { setFilterMovie } from "@/redux/movies/movie.action";

import styles from "./header.module.scss";

const Header = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const elementMenu = useRef(null);

  /**
   * handleChange
   * @param {*} evt : value -> data input
   * Desc: filter data by value
   */

  const handleChange = evt => {
    const filterSearch = evt.target.value;

    if (filterSearch.length > 2) {
      dispatch(setFilterMovie(filterSearch));
    } else {
      dispatch(setFilterMovie(""));
    }
  };

  /**
   * handleClick
   * @param {*} none
   * Desc: open or close the hamburger menu
   */

  const handleClick = () => {
    if (!show) {
      elementMenu.current.setAttribute("style", "display:block;");
      setShow(true);
    } else {
      elementMenu.current.setAttribute("style", "display:none;");
      setShow(false);
    }
  };

  /**
   * Back to main landing
   */

  const backMain = () => {
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          onClick={backMain}
          src="/img/clarovideo-logo-sitio.svg"
          alt="Logo clarovideo"
          width={150}
          height={40}
        />
        <div className={styles.mobileMenu} onClick={handleClick}>
          <span className={styles.iconMenu}>
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </div>

      <Navigation elementMenu={elementMenu} />

      <div className={styles.rightMenu}>
        <InputSearch handleChange={evt => handleChange(evt)} />
        <Button title="Ingresar" />
        <Button title="Regístrate" />
      </div>
    </header>
  );
};

export default memo(Header);
