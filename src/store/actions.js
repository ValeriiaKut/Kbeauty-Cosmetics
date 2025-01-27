
export const ADD_TO_ORDER = "ADD_TO_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY";
export const TOGGLE_SHOW_ITEM = "TOGGLE_SHOW_ITEM";
export const SORT_ITEMS = "SORT_ITEMS";

export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";


export const addToOrder = (item) => ({ type: ADD_TO_ORDER, payload: item });
export const deleteOrder = (id) => ({ type: DELETE_ORDER, payload: id });
export const chooseCategory = (category) => ({ type: CHOOSE_CATEGORY, payload: category });
export const toggleShowItem = (item) => ({ type: TOGGLE_SHOW_ITEM, payload: item });
export const sortItems = (sortOrder) => ({ type: SORT_ITEMS, payload: sortOrder });


export const fetchItemsRequest = () => ({ type: FETCH_ITEMS_REQUEST });
export const fetchItemsSuccess = (items) => ({ type: FETCH_ITEMS_SUCCESS, payload: items });
export const fetchItemsFailure = (error) => ({ type: FETCH_ITEMS_FAILURE, payload: error });


export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch("/data/item.json"); 
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};
