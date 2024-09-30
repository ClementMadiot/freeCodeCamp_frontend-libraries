/// Redux is a state management framework that can be used with a number of different web technologies, including React.

//* Redux : Create a Redux Store

const reducer1 = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store1 = Redux.createStore(reducer1);

//* Redux : Get State from the Redux Store

/// The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.

const store2 = Redux.createStore((state = 5) => state);

const currentState = store2.getState();

//* Redux : Define a Redux Action

const action = {
  type: "LOGIN",
};
// Define an action creator here:
const actionCreator = () => action;

//* Redux : Dispatch an Action Event

const store3 = Redux.createStore((state = { login: false }) => state);

const loginAction1 = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
loginAction.dispatch(loginAction1());

//* Redux : Handle an Action in the Store

const defaultState3 = {
  login: false,
};

const reducer3 = (state = defaultState3, action) => {
  // Change code below this line
  if ((action.type = "LOGIN")) {
    return {
      login: true,
    };
  } else {
    return state;
  }
  // Change code above this line
};

const store4 = Redux.createStore(reducer3);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

//* Redux : Use a Switch Statement to Handle Multiple Actions

// Use const for Action Types

// A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used.
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState4 = {
  authenticated: false,
};

const authReducer1 = (state = defaultState4, action) => {
  // Change code below this line
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
      break;
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
      break;
  }
  // Change code above this line
};

const store5 = Redux.createStore(authReducer1);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

//* Redux : Register a Store Listener

const ADD = "ADD";

const reducer4 = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store6 = Redux.createStore(reducer4);

// Global count variable:
let count = 0;

// Change code below this line
store6.subscribe(() => count++);
// Change code above this line

store6.dispatch({ type: ADD });
console.log(count);
store6.dispatch({ type: ADD });
console.log(count);
store6.dispatch({ type: ADD });
console.log(count);

//* Redux : Combine Multiple Reducers

const INCREMENT1 = "INCREMENT";
const DECREMENT1 = "DECREMENT";

const counterReducer1 = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT1:
      return state + 1;
    case DECREMENT1:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN1 = "LOGIN";
const LOGOUT1 = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN1:
      return {
        authenticated: true,
      };
    case LOGOUT1:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer1,
  auth: authReducer,
});

const store7 = Redux.createStore(rootReducer);

//* Redux : Send Action Data to the Store

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store10 = Redux.createStore(notesReducer);

console.log(store10.getState());
store10.dispatch(addNoteText("Hello!"));
console.log(store10.getState());

//* Redux : Use Middleware to Handle Asynchronous Actions

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

// In this example, an asynchronous request is simulated with a setTimeout() call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested
const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    store11.dispatch(requestingData);
    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };
      // Dispatch received data action here
      store11.dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState5 = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState5, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store11 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

//* Redux : Write a Counter with Redux

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
      break;
    case DECREMENT:
      return state - 1;
    default:
      return state;
      break;
  }
};

// define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT
  };
};

// define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT
  };
}

// Define the Redux store here, passing in your reducers
const store8 = Redux.createStore(counterReducer);

// console.log(store8.getState());
// store8.dispatch(incAction());
// console.log(store8.getState());


//* Redux : Never Mutate State

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo)
      // or return 
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store12 = Redux.createStore(immutableReducer);


// store12.dispatch(addToDo('Learn Redux'));
// console.log(store12.getState());

//* Redux : Use the Spread Operator on Arrays

const immutableReducer2 = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo] 
    default:
      return state;
  }
};

const addToDo2 = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store13 = Redux.createStore(immutableReducer2);

//* Redux : Remove an Item from an Array


const immutableReducer3 = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return state.slice(0, action.index).concat(state.slice(action.index + 1));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store14 = Redux.createStore(immutableReducer3);
// store14.dispatch(removeItem())
// console.log(store14.getState())

//* Redux : Copy an Object with Object.assign

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer4 = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: "online" })
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer4);