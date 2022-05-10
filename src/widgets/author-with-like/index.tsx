import React, { FC } from 'react';
import styled from 'styled-components';
import { TAuthorWithLike } from '../../types/styles.types';
import Author from '../author';
import Likes from '../likes';

const AuthorLikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorWithLike: FC<TAuthorWithLike> = ({
  createAt,
  userName,
  favorite,
  imageSrc,
  handleClick,
  likesCounterValue,
}) => (
  <AuthorLikeContainer>
    <Author createAt={createAt} userName={userName} imageSrc={imageSrc} />
    <Likes likesCounterValue={likesCounterValue} handleClick={handleClick} favorite={favorite} />
  </AuthorLikeContainer>
);

export default AuthorWithLike;
