import React from "react";
import Link from "next/link";

import styles from "../header/header.module.scss";

/**
 *
 * @param {*} param0 elementMenu reference to domElement
 * @returns navigation Movile and desktop
 */

const Navigation = ({ elementMenu }) => {
  return (
    <>
      <div
        className={styles.navigation + " " + styles.mobile}
        ref={elementMenu}
      >
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/catalog">Catalogo</Link>
            </li>
            <li>
              <Link href="/genders">Géneros</Link>
            </li>
            <li>
              <Link href="/buy-rent">Compra y Renta</Link>
            </li>
            <li>
              <Link href="/channels">Canales</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.navigation + " " + styles.desktop}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/catalog">Catalogo</Link>
            </li>
            <li>
              <Link href="/genders">Géneros</Link>
            </li>
            <li>
              <Link href="/buy-rent">Compra y Renta</Link>
            </li>
            <li>
              <Link href="/channels">Canales</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
