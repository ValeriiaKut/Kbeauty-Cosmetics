import itemsData from "../data/item.json";

const initialState = {
  orders: [],
  showFullItem: false,
  currentItems: itemsData, 
  items: itemsData,   
  buyItems: false,
  fullItem: {},
  sortOrder: "asc",
  loading: false,
  error: null, 
};


const ADD_TO_ORDER = "ADD_TO_ORDER";
const DELETE_ORDER = "DELETE_ORDER";
const CHOOSE_CATEGORY = "CHOOSE_CATEGORY";
const TOGGLE_SHOW_ITEM = "TOGGLE_SHOW_ITEM";
const SORT_ITEMS = "SORT_ITEMS";
const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      if (!state.orders.some((order) => order.id === action.payload.id)) {
        return { ...state, orders: [...state.orders, action.payload] };
      }
      return state;

    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };

    case CHOOSE_CATEGORY:
      if (action.payload === "all") {
        return { ...state, currentItems: state.items };
      }
      return {
        ...state,
        currentItems: state.items.filter(
          (item) => item.category === action.payload
        ),
      };

    case TOGGLE_SHOW_ITEM:
      return {
        ...state,
        showFullItem: !state.showFullItem,
        fullItem: action.payload,
      };

    case SORT_ITEMS:
      const sortedItems = [...state.currentItems].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(" zł", "").replace(",", "."));
        const priceB = parseFloat(b.price.replace(" zł", "").replace(",", "."));
        return action.payload === "asc" ? priceA - priceB : priceB - priceA;
      });
      return { ...state, currentItems: sortedItems, sortOrder: action.payload };

    
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        currentItems: action.payload, 
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, 
      };

    default:
      return state;
  }
}

