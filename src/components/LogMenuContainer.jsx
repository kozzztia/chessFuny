import React from 'react'
import styles from '../styles/styles.module.css'
import { useSelector } from 'react-redux';
import nextId from "react-id-generator";
const LogMenuContainer = () => {
  const steps = useSelector(state => state.logMenu.steps)
  return (
    <div className={styles.logMenu}>
      {
        steps.map((step) => (<p key={nextId()}>{step.x +'X'+ step.y + step.figure}</p>))
      }
    </div>
  )
}

export default LogMenuContainer
