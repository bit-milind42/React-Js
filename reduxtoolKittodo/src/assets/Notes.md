# REDUX NOTES
Redux is a core-library
***React-Redux*** {Wiring/bridge b/w react and redux , so they can connect}

It starts from Store.js/store [Each application has each store],'{Single source of truth}'

***Reducers*** in store.js


### todoSlice.js

For slice we need 3 things 
1. name
2. initialState
3. reducers (Its a object , we can add key value and function in it)

***state*** updated state vlaue in the store or current value from [intialState] ....( the state in a reducer fetches its initial value from initialState when the reducer is called for the first time. This happens when the Redux store is initialized.)
***action*** action.Paylod


In todoSlice, we have to pass(export) all the reducer
and export reducer's main source 


### Components
***AddTodo.jsx*** for dispatching data with useDispatch() function

import reducer 
then we dispatch data through Dispatch function to reducer

***Todo.jsx***
Values lene k liye

for removing value we use dispatch function