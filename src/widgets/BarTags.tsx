import React, { FC } from 'react';
import { useSelector } from '../services/hooks';
import styled from 'styled-components';
import Tag from './tag';
type TBarTags = {
    tagList: string[]
    image?:string,
}

type TLists = {
    image?: string,
}

const Lists = styled.ul<TLists>`
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    flex-direction: row-reverse;
    gap: 4px 24px;
    //width:526px;
    white-space: pre-line;
    padding:0;
    @media screen and (max-width:768px) {
        max-width:453px;
        ${(props)=> props.image && `margin-left: -60px`}
     }
     @media screen and (max-width:320px) {
        max-width:352px;
        margin:0;
        
        flex-direction: row;
     }
`
const List = styled.li`
    list-style-type: none;
`
export const BarTags: FC<TBarTags> = ({ tagList, image }) => {
    const { tag: activeTag } = useSelector((state) => state.view)
    return (
        <Lists image={image}>
            {tagList.map((tag) => {
                return (
                    <List>
                        <Tag tag={tag} isActive={tag === activeTag} />
                    </List>
                )
            })}
        </Lists>
    )
}
export default BarTags