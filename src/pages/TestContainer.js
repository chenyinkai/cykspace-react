// import React from 'react'
import { connect } from 'react-redux'
import Test from './Test'

function mapStateToProps(state) {
    // console.log(state)
    return {
        value: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Action Creator
const increaseAction = { type: 'increase' }

const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)

export default TestContainer