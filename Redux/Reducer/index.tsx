
export const initialState = {
  userBalance: 0
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function rootReducer(state = initialState, action: any) {
  console.log(action)
  switch (action.type) {
    case "userBalance":
      return { ...state, userBalance: action.payload };
    default:
      return state;
  }
}