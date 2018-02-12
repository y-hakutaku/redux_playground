import React, {Component} from 'react'
import {addActionCreate, removeActionCreate} from '../Module'
import { connect } from 'react-redux'

const Counter = ({count,total,dispatchAddAction,dispatchRemoveAction}) => {
  return (
    <div>
    <p>{count}個</p>
    <div>
    <button onClick={(e) => dispatchAddAction(count + 1)}>+</button>
    <button onClick={(e) => dispatchRemoveAction(count - 1)}>-</button>
    </div>

    <p>{total}</p>
    </div>
  )
}


export default connect(
  state => ({count: state.count,
            total: state.total}),
  dispatch => ({dispatchAddAction: count=>dispatch(addActionCreate(count)),
                dispatchRemoveAction: count=>dispatch(removeActionCreate(count))})
)(Counter)
