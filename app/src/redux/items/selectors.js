import { createStructuredSelector } from 'reselect';
import * as R from 'ramda';

export const selectItemsData = R.path(['items', 'data']);
export const selectItemsError = R.path(['participation', 'error']);
export const selectItemsIsLoading = R.path(['participation', 'isLoading']);

export const itemsSelector = createStructuredSelector({
  data: selectItemsData,
  error: selectItemsError,
  isLoading: selectItemsIsLoading,
});
