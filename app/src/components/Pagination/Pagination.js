import React from 'react'
import PropTypes from 'prop-types'
import { Container, Page, StyledPagination, Button, Controls } from './Pagination.style'


const Pagination = ({currantPage, maxPage, updatePage}) => (
  <StyledPagination>
    <Container>
      <Page>{currantPage} of {maxPage} pages</Page>
      <Controls>
        <Button
          disabled={currantPage <= 1}
          onClick={() => updatePage(1)}
        >{"<<"}</Button>
        <Button
          disabled={currantPage <= 1}
          onClick={() => updatePage(currantPage - 1)}
        >{"< Prev page"}</Button>
        <Button
          disabled={currantPage >= maxPage}
          onClick={() => updatePage(currantPage + 1)}
        >{"Next page >"}</Button>
        <Button
          disabled={currantPage >= maxPage}
          onClick={() => updatePage(maxPage)}
        >{">>"}</Button>
      </Controls>
    </Container>
  </StyledPagination>
)

Pagination.propTypes = {
  currantPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};


export default Pagination
