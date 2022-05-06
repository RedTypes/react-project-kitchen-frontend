import styled, { css } from 'styled-components';
import React from 'react';
import { ReactComponent as TrashIconSVG } from './trash.svg';
import { ReactComponent as LikeIconSVG } from './like.svg';

type IconType = {
  height?: string,
  width?: string,
  color?: string,
  fill?: string,
};

type TrashIconType = {
  test: string,
} & IconType;

type LikeIconType = {
  active?: boolean,
} & IconType;

const iconStyled = ({
  height, width, color, fill,
}: IconType) => css`
    height: ${height || 50}px;
    width: ${width || 50}px;
    fill : ${fill || 'none'};
    & path  {
      stroke: ${color || 'red'};
    };
    &:hover path {
      stroke: red;
    }
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const TrashStyled = styled(({ test, ...props }: TrashIconType) => <TrashIconSVG {...props} />)`
  ${(props) => iconStyled(props)};
  ${(props) => props.height
    && css`
      transform: rotate(-180deg);
    `};
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const LikeStyled = styled((props: LikeIconType) => <LikeIconSVG {...props} />)`
  ${(props) => iconStyled(props)};
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const Like2Styled = styled(({ active, ...props }: LikeIconType) => <LikeIconSVG {...props} />)`
  ${(props) => iconStyled(props)};
  ${(props) => props.active
    && css`
      fill: black;
    `};
`;

export { TrashStyled, LikeStyled, Like2Styled };
