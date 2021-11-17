export enum ActionTypes {
    Add = '[Product] Add to cart',
    Remove = '[Product] Remove from cart',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success'
  }

  export const AddToCart = (payload: any) => {
    return {
      type: ActionTypes.Add,
      payload
    };
  };

  export const GetItems = () => ({
    type: ActionTypes.LoadItems
  });

  export const RemoveFromCart = (payload: any) => ({
    type: ActionTypes.Remove,
    payload
  });
  
  export const LoadItems = (payload: any) => ({
    type: ActionTypes.LoadSuccess,
    payload
  });