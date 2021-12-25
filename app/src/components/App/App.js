import React, { useState } from "react";
import { Header, Pagination } from "../";
import { StyledApp } from "./App.style";


const App = () => {
  const [page, setPage] = useState(1);

  return (
    <StyledApp>
      <Header/>
      {/*<Main/>*/}
      <Pagination currantPage={page} maxPage={10} updatePage={p => setPage(p)}/>
    </StyledApp>
  )
}

export default App;
