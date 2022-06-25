import React from 'react'
import styles from '../styles/styles.module.css';
import { useSelector } from 'react-redux';
const CounterContainer = () => {
  const count = useSelector(state => state.countState.count)
  return (
    <div className={styles.counter}>
        <h2>зделано кликов : {count}</h2>
    </div>
  )
}

export default CounterContainer
