import { HttpClient } from '@angular/common/http';

import { RootModel } from '../Models/RootModel';

import { ActionEnum } from './actions';

import { APIService } from '../services/CallApi';

export interface IappState {
  root_model: RootModel;
}

export const INIT_STATE: IappState = {
  root_model: <RootModel>{} 
}

// let http: HttpClient;

export function rootReducer(state: IappState = INIT_STATE, action: any) {



    switch (action.type) {
        case ActionEnum.GetAPI:
          return {
            ...state,
            root_model: action.payload
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