import React, { useEffect, useState } from "react";
import { Board, Header, Pagination } from "../";
import { StyledApp, Title, Container} from "./App.style";
import { useDispatch } from "react-redux";
import { getItems } from "../../redux/items/actions";


const App = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getItems(page))
  },[page])

  return (
    <StyledApp>
      <Header/>
      <Container>
        <Title>Community playlist</Title>
        <Board/>
      </Container>
      <Pagination currantPage={page} maxPage={10} updatePage={p => setPage(p)}/>
    </StyledApp>
  )
}

export default App;
