import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/LoginScreen'
import {auth} from "./firebase1"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout , selectUser} from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route exact path = "/" element={<HomeScreen/>} />
          </Routes>
        )} 
      </Router>
    </div>
  );
}

export default App;
