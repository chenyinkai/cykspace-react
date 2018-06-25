import React from 'react'
import BasicExample from './BasicExample'
import store from '../store/store'
import Counter from './Counter'
import '../style/test.less'
import TestContainer from './TestContainer'
import Nav from '../components/nav/nav'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <BasicExample />
          <hr />
          <h1>
            111 <span>122</span>
          </h1>
          <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
          />
          <hr />
          <TestContainer />
        </div>
      </div>
    )
  }
}

export default App
