
export const initialState = {
  ropsten: false
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function rootReducer(state = initialState, action: any) {
  console.log(action)
  switch (action.type) {
    case "ROPSTEN":
      return { ...state, ropsten: action.payload };
    default:
      return state;
  }
}