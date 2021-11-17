export enum ActionEnum {
    GetAPI = 'Get From API',
    POSTAPI = 'Post From API',
    DELAPI = 'delete from API'
  }

  export const callGetAPI = (payload: any) => {
    return {
      type: ActionEnum.GetAPI,
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