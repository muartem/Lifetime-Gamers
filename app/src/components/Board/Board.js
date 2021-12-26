import React from 'react'
import { useSelector } from "react-redux";
import { selectItemsData } from "../../redux/items/selectors";
import { AddItem, Item } from "../";
import { List, Header, StyledBoard } from './Board.style'


const Board = () => {
  const items = useSelector(selectItemsData)
  //const isLoading = useSelector(selectItemsIsLoading)
  //const error = useSelector(selectItemsError)

  return (
    <StyledBoard>
      <Header>
        <div/>
        <div>Game title</div>
        <div>Status</div>
        <div/>
      </Header>
      <List>
        <AddItem/>
        {items?.map(item => (
          <Item key={item.id} id={item.id} title={item.title} completed={item.completed}/>
        ))}
      </List>
    </StyledBoard>
  )
}


export default Board
