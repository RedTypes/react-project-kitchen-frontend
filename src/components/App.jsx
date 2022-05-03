/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import {
  Route, Routes, // useNavigate, useLocation,
} from 'react-router-dom';
import { useDispatch } from '../services/hooks';

import { jwt } from '../services/api';
import { Profile } from '../components_refact';

import Header from './Header';
import { Editor } from './Editor';
import Register from './Register';
import Login from './Login';
import Settings from './Settings/Settings';
import ProfileFavorites from './ProfileFavorites';

import Home from './Home';

import Article from './Article/index';

import { getUserThunk } from '../thunks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt.test()) {
      dispatch(getUserThunk());
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/article/:id' element={<Article />} />

        <Route path='/register' element={<Register />} />
        <Route path='/@:username/favorites' element={<ProfileFavorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/editor/:slug' element={<Editor />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/@:username' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
