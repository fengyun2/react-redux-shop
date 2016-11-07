import fetch from 'isomorphic-fetch'

import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, FILTER_ITEM, ADD_CATE, REQUEST_ADD_CATE, RECEIVE_ADD_CATE } from 'CONSTANTS/actionTypes'

// Item

/**
 * addItem
 */
export const addItem = () => {
  return dispatch => {
    setTimeout(() => dispatch({ type: ADD_ITEM }), 1000)
  }
}

/**
 * deleteItem
 */
export const deleteItem = (item) => {
  return { type: DELETE_ITEM, item }
}

/**
 * deleteAll
 */
export const deleteAll = () => {
  return { type: DELETE_ALL }
}

// filter

export const filterItem = e => {
  let filterItem = e.target.value

  return { type: FILTER_ITEM, filterItem }
}

/**
 * cate
 *
 *
 */

function requestAddCategory (data) {
  return {
    type: REQUEST_ADD_CATE,
    data
  }
}

function receiveAddCategory (data, json) {
  return {
    type: RECEIVE_ADD_CATE,
    data
  }
}

export const addCategory = data => {
  return (dispatch) => {
    dispatch(requestAddCategory(data))

    return fetch(`https://api.github.com/repos/typecho-fans/plugins/contents/`).then(response => response.json())
    .then(json => {
      console.log('receive json', json)
      return dispatch(receiveAddCategory(data, json))
    }
    )
    // return () => {
    //   setTimeout(() => dispatch(receiveAddCategory(data)), 1000)
    // }
  }

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('add category successfull')
  //     resolve()
  //   }, 500)
  // })
}

export const showCategory = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('get category successfull')
      resolve()
    }, 500)
  })
}
