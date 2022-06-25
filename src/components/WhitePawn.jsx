import React from 'react'
import pawn from '../pictures/wpawn.svg';
import styles from '../styles/styles.module.css';

const WhitePawn = () => {
  return (
    <picture className={styles.pawn}>
      <img src={pawn} alt="pawn" />
    </picture>
  )
}

export default WhitePawn
