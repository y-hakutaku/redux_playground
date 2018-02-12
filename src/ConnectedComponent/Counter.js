import React, {Component} from 'react'
import {addAction} from './Module'
import { connect } from 'react-redux'

const Counter = ({count,total,dispatchAddAction}) => {
  return (
    <div>
    <p>{count}個</p>
    <div><button onClick={(e) => dispatchAddAction(count + 1)}>+</button></div>
    <p>{total}</p>
    </div>
  )
}


export default connect(
  state => ({count: state.count,
            total: state.total}),
  dispatch => ({dispatchAddAction: amount=>dispatch(addAction(amount))})
)(Counter)
