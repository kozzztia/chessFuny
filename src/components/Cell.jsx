import React,{useEffect} from 'react'
import styles from '../styles/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_STEP, ADD_STEP_TO_BLOG, RESET_STEP, COUNT_STEPS, FIND_TURN } from './../store/consts';
import BlackPawn from './BlackPawn';
import WhitePawn from './WhitePawn';



const Cell = (props) => {
  const steps = useSelector(state => state.logMenu.steps)
  const step = useSelector(state => state.logMenu.step)
  const state = useSelector(state => state)
    const dispatch = useDispatch()
    const addStep = (cell)=>{
        dispatch({type: ADD_STEP, step: cell})
    }
    const countSteps = ()=>{
        dispatch({type: COUNT_STEPS})
    }
    const addStepToBlog = ()=>{
        dispatch({type: ADD_STEP_TO_BLOG})
    }
    const findTurn = (cell)=>{
      dispatch({type: FIND_TURN, turnX: cell.x , turnY: cell.y})
      console.log(state)
  }
    const addStepToBlogAndResetStep = (cell)=>{
          addStep(cell)
          addStepToBlog ();
          countSteps()
          findTurn(cell)
          console.log(cell)

    }

  return (
    <button className={styles.cell} 
    onClick={()=>addStepToBlogAndResetStep(props.cell)}
    disabled={!props.cell.flag}
    // onFocus={}
    >
      {
        props.cell.flag?
        props.cell.figure === "white"?
        <WhitePawn/>:<BlackPawn/>
        :<p>{props.cell.x + 'x' + props.cell.y}</p>
      }
    </button>
  )
}

export default Cell
