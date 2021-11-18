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

export function rootReducer(state: IappState = INIT_STATE, action: any) {



    switch (action.type) {
        case ActionEnum.GETAPI:
          return {
            ...state,
            root_model: action.payload,
            callType: action.subtype
          };
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