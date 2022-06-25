import React from 'react'
import styles from '../styles/styles.module.css';
import { useSelector} from 'react-redux';
import Cell from './Cell';
import nextId from "react-id-generator";

const ChessContainer = () => {

const cells = useSelector(state => state.chessCellState.cells)
  return (
    <div className={styles.chess}>
      {
        cells.map(cell => 
        <Cell 
        key={nextId()}
        cell={cell}
        />)
      }
    </div>
  )
}

export default ChessContainer
