import { RootModel } from "../Models/RootModel";

import { IappState } from "./store";

export enum ActionEnum {
    GETAPI = 'Get From API',
    POSTAPI = 'Post From API',
    DELAPI = 'delete From API'
  }

  export const callGetAPI = (payload: RootModel) => {
    return {
      type: ActionEnum.GETAPI,
      payload
    }
  }

  export const callPostAPI = (payload: any) => {
    return {
      type: ActionEnum.POSTAPI,
      payload
    }
  }

  export const callDeleteAPI = (payload: any) => {
    return {
      type: ActionEnum.DELAPI,
      payload
    }
  }

  // export const AddToCart = (payload: any) => {
  //   return {
  //     type: ActionEnum.Add,
  //     payload
  //   };
  // };

  // export const GetItems = () => ({  
  //   type: ActionTypes.LoadItems
  // });

  // export const RemoveFromCart = (payload: any) => ({
  //   type: ActionTypes.Remove,
  //   payload
  // });
  
  // export const LoadItems = (payload: any) => ({
  //   type: ActionTypes.LoadSuccess,
  //   payload
  // });