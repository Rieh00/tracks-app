import createDataContext from "./createDataContext";

const authReducer = (state, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
  return ({ email, password }) = {
        //api request
      //handle success and failiure
  };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        //api request
        //handle success and failiure
    }
};

const signout = (dispatch) => {
    return () => {
        //api request
        //handle success and failure
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn: false}
);