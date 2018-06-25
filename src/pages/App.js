import React from 'react'
// import BasicExample from './BasicExample'
// import store from '../store/store'
// import Counter from './Counter'
// import TestContainer from './TestContainer'
import '../style/test.less'
import Nav from '../components/nav/nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Articles from './articles/list'
import Tags from './tags/tags'
import Archives from './archives/archives'
import About from './about/about'
import '../style/common.less'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
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
        </div> */}
          <Route path="/" exact component={Articles} />
          <Route path="/tags" component={Tags} />
          <Route path="/archives" component={Archives} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
