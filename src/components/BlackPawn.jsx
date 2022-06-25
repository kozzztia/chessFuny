import React from 'react'
import pawn from '../pictures/pawn.png';
import styles from '../styles/styles.module.css';

const BlackPawn = () => {
  return (
    <picture className={styles.pawn}>
      <img src={pawn} alt="pawn" />
    </picture>
  )
}

export default BlackPawn
