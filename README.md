# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Dev Tinder


- create a Vite + React application
- Remove unnecessary Code and create a Hello World app
- Install Tailwind Css
- Install Daisy Ui
- Add Navbar componenet to App.jsx
- Install React Router Dom
- Create browserRouter > Routes> Route = /Body> Route Children
- Create an Outlet in your body componenet
- Create a footer
- Create a Login page
- Install axios
- CORS = install cors in backend => add middleware to with configurations: origin, credentials: true
- Whenever you are making API call so pass => { woithCredentials : true {}}
- Install Redux Toolkit - Check documentation https://redux-toolkit.js.org/tutorials/quick-start
-Install react-redux + @redux/toolkit
- configureStore => Provider => createSlice => add reducer to store
- Now we are safe to add data to the redux store
- Add Redux Dev tolls in Chrome
- Login and see if data is reflecting properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constants file 
- You should not br able to access other routes without login
- If token not present redirect user to login page
- Logout Feature, show dynamic error in login Ui


Body
   NavBar
   Route=/  => Feed
   Route=/login  => login
   Route=/comnnections => Connections
   Route=/profile => Profile

