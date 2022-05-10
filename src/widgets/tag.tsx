import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { DeleteIcon } from '../ui-lib';

interface ITagProps {
  tag: string,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, tag: string) => void,
  active: boolean,
  inactiveTag: (e: React.MouseEvent<SVGSVGElement>) => void,
}

const Tag: FC<ITagProps> = ({
  tag, handleClick, active, inactiveTag,
}) => {
  const theme = useTheme();

  const Button = styled.button`
    padding: 0;
    border: none;
    font-family: ${theme.text18Sans.family};
    font-weight: ${theme.text18Sans.weight};
    font-size: ${theme.text18Sans.size}px;
    line-height: ${theme.text18Sans.height}px;
    display: flex;
    align-items: center;
    color: ${active ? theme.button.blue.default : theme.secondaryText};
    background-color: transparent;

    :active {
      outline: none;
    }
  `;

  return (
    <Button
      type='button'
      key={tag}
      onClick={(e) => handleClick(e, tag)}>
      #
      {tag}
      {' '}
      {active && <DeleteIcon color='blue' onClick={(e) => inactiveTag(e)} />}
    </Button>
  );
};

export default Tag;
