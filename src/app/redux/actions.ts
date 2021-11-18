export enum ActionEnum {
    GETAPI = 'Get From API',
    POSTAPI = 'Post From API',
    DELAPI = 'delete From API'
  }

  export const callGetAPI = (payload: any, subtype: String) => {
    return {
      type: ActionEnum.GETAPI,
      payload,
      subtype
    }
  }

  export const callPostAPI = (payload: any, subtype: String) => {
    return {
      type: ActionEnum.POSTAPI,
      payload,
      subtype
    }
  }

  export const callDeleteAPI = (payload: any, subtype: number) => {
    return {
      type: ActionEnum.DELAPI,
      payload,
      subtype
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