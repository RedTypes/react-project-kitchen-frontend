import React, { FC } from 'react';
import { useSelector } from '../../services/hooks';
import { TrashStyled, LikeStyled, Like2Styled } from '../../ui-lib/icons/example';

const Banner: FC = () => {
  const { appName } = useSelector((state) => state.system);
  const isLoggedIn = useSelector(
    (state) => !!state.profile.username && !!state.profile.email,
  );

  return (
    isLoggedIn
      ? null
      : (
        <div className='banner'>
          <TrashStyled height='150' color='blue' test='test' />
          <LikeStyled fill='black' />
          <Like2Styled />
          <Like2Styled active />
          <div className='container'>
            <h1 className='logo-font'>
              {appName.toLowerCase()}
            </h1>

            <p>Your community project starter pack.</p>
          </div>
        </div>
      )
  );
};

export default Banner;
