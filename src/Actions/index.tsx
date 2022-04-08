
export function renderRopstenButton(value: boolean) {
  console.log('nano')
  return function (dispatch: (arg0: { type: string; payload: {} }) => {}) {
    console.log('nini')
    return dispatch({
      type: "ROPSTEN",
      payload: value,
    });
  };
}