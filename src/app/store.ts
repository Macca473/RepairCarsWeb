import { HttpClient } from '@angular/common/http';

import { Car } from './Models/Car';

import { ActionTypes } from './actions';

import { APIService } from './services/CallApi';

export interface IappState {
    cars: Array<Car>;
}

export const INIT_STATE: IappState = {
    cars: []
}

let http: HttpClient;

export function rootReducer(state: IappState = INIT_STATE, action: any) {
    switch (action.type) {
        case ActionTypes.LoadSuccess:
          return {
            ...state,
            cars: [...action.payload]
          };
        case ActionTypes.Add:
          return {
            ...state,
            cars: [...state.cars, action.payload]
          };
        
        default:
          return state;
      }
}