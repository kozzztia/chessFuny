
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_STEP, ADD_STEP_TO_BLOG, RESET_STEP, COUNT_STEPS, FIND_TURN } from './consts';
export const defaultState = {
    countState: {
        count: 0,
    },
    chessCellState: {
        cells: [
            { x: 1, y: 1, flag: false, figure: null, turn: true }, { x: 1, y: 2, flag: true, figure: "black", turn: false }, { x: 1, y: 3, flag: true, figure: 'black', turn: false }, { x: 1, y: 4, flag: true, figure: 'black', turn: false }, { x: 1, y: 5, flag: false, figure: null, turn: true },
            { x: 2, y: 1, flag: false, figure: null, turn: true }, { x: 2, y: 2, flag: false, figure: null, turn: true }, { x: 2, y: 3, flag: false, figure: null, turn: true }, { x: 2, y: 4, flag: false, figure: null, turn: true }, { x: 2, y: 5, flag: false, figure: null, turn: true },
            { x: 3, y: 1, flag: false, figure: null, turn: true }, { x: 3, y: 2, flag: false, figure: null, turn: true }, { x: 3, y: 3, flag: false, figure: null, turn: true }, { x: 3, y: 4, flag: false, figure: null, turn: true }, { x: 3, y: 5, flag: false, figure: null, turn: true },
            { x: 4, y: 1, flag: false, figure: null, turn: true }, { x: 4, y: 2, flag: false, figure: null, turn: true }, { x: 4, y: 3, flag: false, figure: null, turn: true }, { x: 4, y: 4, flag: false, figure: null, turn: true }, { x: 4, y: 5, flag: false, figure: null, turn: true },
            { x: 5, y: 1, flag: false, figure: null, turn: true }, { x: 5, y: 2, flag: true, figure: "white", turn: false }, { x: 5, y: 3, flag: true, figure: 'white', turn: false }, { x: 5, y: 4, flag: true, figure: 'white', turn: false }, { x: 5, y: 5, flag: false, figure: null, turn: true },
        ]
    },
    logMenu: {
        steps: [],
        step: {},
    }
}






const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_STEP:
            return {
                ...state,
                logMenu: {
                    ...state.logMenu,
                    step: action.step,
                },
            };
        case RESET_STEP:
            return {
                ...state,
                logMenu: {
                    ...state.logMenu,
                    step: action.step,
                },
            };
        case ADD_STEP_TO_BLOG:
            return {
                ...state,
                logMenu: {
                    ...state.logMenu,
                    steps: [...state.logMenu.steps, state.logMenu.step]
                },
            };
        case COUNT_STEPS:
            return {
                ...state,
                countState: {
                    count: state.countState.count + 1,
                },
            };
        case FIND_TURN:
            return {
                ...state,
                chessCellState: {
                    ...state.chessCellState,
                    ...state.chessCellState.cells.forEach(cell => cell.x === action.turnX + 1 && cell.y === action.turnY ? cell.turn = false : console.log(cell)),
                    ...state.chessCellState.cells.forEach(cell => cell.x === action.turnX && cell.y === action.turnY ? cell.turn = true : console.log(cell)),
                    ...state.chessCellState.cells.forEach(cell => cell.x === action.turnX - 1 && cell.y === action.turnY ? cell.flag = false : console.log(cell)),
                    ...state.chessCellState.cells.forEach(cell => cell.x === action.turnX && cell.y === action.turnY ? cell.flag = true : console.log(cell)),


                },
            };
        default: return state;

    }

}


export const store = createStore(reducer, composeWithDevTools())