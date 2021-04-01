import React, { Fragment } from "react";
import styles from "../components/project.module.css";

function Project(props) {
  return (
    <Fragment>
      <li className={styles.cards_item}>
        <div className={styles.card}>
          <div className={styles.card_image}>
            <img src={props.image} alt={`${props.name} logo`} />
          </div>
          <div className={styles.card_content}>
            <p className={styles.card_name}>{props.name}</p>
            <p className={styles.card_author}>{props.author}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
}

export default Project;
