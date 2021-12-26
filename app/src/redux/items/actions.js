import Constants from "./constants";
import API from "../../servises/axios";

export const getItems = (start) => (
    async dispatch => {
        dispatch({ type: Constants.ITEMS_REQUEST })
        try {
            const items = await API.getItems(start)
            dispatch(
              {
                  type: Constants.ITEMS_FETCH_SUCCESS,
                  payload: items
              }
            )
        } catch (error) {
            dispatch(
              {
                  type: Constants.ITEMS_FAILURE,
                  payload: error
              }
            )
        }
    }
)

export const createItem = (item) => (
  async dispatch => {
    dispatch({ type: Constants.ITEMS_REQUEST })
    try {
      await API.createItem(item)
      dispatch(
        {
          type: Constants.ITEMS_CREATE_SUCCESS,
          payload: item
        }
      )
    } catch (error) {
      dispatch(
        {
          type: Constants.ITEMS_FAILURE,
          payload: error
        }
      )
    }
  }
)

export const renameItem = (id, title) => (
    async dispatch => {
      dispatch({ type: Constants.ITEMS_REQUEST })
      try {
        await API.renameItem(id, title)
        dispatch(
          {
            type: Constants.ITEMS_RENAME_SUCCESS,
            payload: { id, title }
          }
        )
      } catch (error) {
        dispatch(
          {
            type: Constants.ITEMS_FAILURE,
            payload: error
          }
        )
      }
    }
)

export const completeItem = (id, completed) => (
  async dispatch => {
    dispatch({ type: Constants.ITEMS_REQUEST })
    try {
      await API.completeItem(id, completed)
      dispatch(
        {
          type: Constants.ITEMS_COMPLETE_SUCCESS,
          payload: { id, completed }
        }
      )
    } catch (error) {
      dispatch(
        {
          type: Constants.ITEMS_FAILURE,
          payload: error
        }
      )
    }
  }
)

export const deleteItem = (id) => (
  async dispatch => {
    dispatch({ type: Constants.ITEMS_REQUEST })
    try {
      await API.deleteItem(id)
      dispatch(
        {
          type: Constants.ITEMS_DELETE_SUCCESS,
          payload: id,
        }
      )
    } catch (error) {
      dispatch(
        {
          type: Constants.ITEMS_FAILURE,
          payload: error
        }
      )
    }
  }
)
