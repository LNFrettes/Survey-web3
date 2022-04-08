
export function userBalance(value: boolean) {
  return function (dispatch: (arg0: { type: string; payload: {} }) => {}) {
    return dispatch({
      type: "ROPSTEN",
      payload: value,
    });
  };
}