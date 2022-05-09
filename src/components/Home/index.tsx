import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from '../../services/hooks';
import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import { clearView } from '../../store';
import getAllTagsThunk from '../../thunks/get-all-tags-thunk';

import LinkConteiner from '../../ui-lib/LinkConteiner';
import { HomeIcon } from '../../ui-lib/icons/icons';

import {DeletePostButton, EditPostButton} from "../../ui-lib/buttons";




const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTagsThunk());
    return () => {
      dispatch(clearView());
    };
  }, [dispatch]);

  return (
    <div className='home-page'>
  
      <Banner />
      <div className='container page'>
        <div className='row'>
          <MainView />
          <div className='col-md-3'>
            <div className='sidebar'>
              <p>Popular Tags</p>
            </div>
            <EditPostButton onClick={() => console.log('Меня нажали!!')} />
            <DeletePostButton onClick={() => console.log('Меня удалительно нажали!!')} />
          </div>
        </div>
      </div>

    </div>
  );
};
export default Home;
