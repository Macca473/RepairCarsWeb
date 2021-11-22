import { HttpClient } from '@angular/common/http';

import { RootModel } from '../Models/RootModel';

import { ActionEnum } from './actions';

import { APIService } from '../services/CallApi';

export interface IappState {
  root_model: RootModel;
  callType: string;
}

export const INIT_STATE: IappState = {
  root_model: <RootModel>{},
  callType: ""
}

// let http: HttpClient;

// on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))

export function rootReducer(state: IappState = INIT_STATE, action: any): IappState {
    switch (action.type) {
        case ActionEnum.GETAPI:
          

          let newState = {...state, 
            root_model: action.payload, 
            callType: action.subtype
          }
          console.log("OldState: " + JSON.stringify(state));
          console.log("InputState: " + JSON.stringify(action.payload));
          console.log("NewState: " + JSON.stringify(newState));
          return newState;
          case ActionEnum.POSTAPI:
            return {
              ...state,
              root_model: action.payload,
              callType: action.subtype
            };
        // case ActionEnum.Add:
        //   return {
        //     ...state,
        //     cars: [...state.cars, action.payload]
        //   };
        
        default:
          return state;
      }
  
}