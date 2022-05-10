import React, { FC } from 'react';
import styled from 'styled-components';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import { AvatarIcon } from '../../ui-lib/icons';

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const AuthorContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

const UserNameLink = styled(Link)`
  font-family: ${({ theme: { text16Sans: { family } } }) => family};
  font-size: ${({ theme: { text16Sans: { size } } }) => size}px;
  font-weight: ${({ theme: { text16Sans: { weight } } }) => weight};
  line-height: ${({ theme: { text16Sans: { height } } }) => height}px;
  color: ${({ theme: { secondaryText } }) => secondaryText};
  text-decoration: none;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const CrateDate = styled.p`
  font-family: ${({ theme: { text12Sans: { family } } }) => family};
  font-size: ${({ theme: { text12Sans: { size } } }) => size}px;
  font-weight: ${({ theme: { text12Sans: { weight } } }) => weight};
  line-height: ${({ theme: { text12Sans: { height } } }) => height}px;
  color: ${({ theme: { secondaryText } }) => secondaryText};
  margin: 0;
`;

type TAuthorProps = {
  userName: string,
  createAt: Date,
  imageSrc?: string,
};

const Author: FC<TAuthorProps> = ({ userName, createAt, imageSrc }) => (
  <AuthorContainer>
    <Link to={userName}>
      <AvatarIcon size='small' name={userName} image={imageSrc} />
    </Link>
    <AuthorContainerInfo>
      <UserNameLink to={userName}>{userName}</UserNameLink>
      <CrateDate>
        <FormattedDate
          value={createAt}
          year='numeric'
          month='long'
          day='2-digit'
          weekday='short' />
      </CrateDate>
    </AuthorContainerInfo>
  </AuthorContainer>
);

export default Author;
