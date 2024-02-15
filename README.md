# React + Vite

This is an react app using redux to manage state in the application.


React using redux

- Firs i've created a store directory where i've created a file store.js
- Then create a store using createStore from redux
- createStore accepts a reducer method 
- so create a reducer method with some default initial value and action parameter
- reducer method return a new store based on different actions.
- Then the created store needs to be export from the store.

Then in the main.jsx file:
- use Provider from react-redux which takes the created store as props 
- inside the Provider use App as children


Then to consume store data in any component I use a hook call useSelector
- this useSelector is use to get slice of data from store which is like a subscription


Then to dispatch action I use a hook call useDispatch
- using dispatch gives a method which can be use to dispatch a action to store perform operations





Steps to run the app:

- npm i

- npm run dev


