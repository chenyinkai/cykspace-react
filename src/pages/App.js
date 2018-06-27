import React from 'react'
import '../style/test.less'
import Nav from '../components/nav/nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Articles from './articles/list'
import Tags from './tags/tags'
import Archives from './archives/archives'
import AboutContainer from './about/aboutContainer'
import '../style/common.less'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Articles} />
          <Route path="/tags" component={Tags} />
          <Route path="/archives" component={Archives} />
          <Route path="/about" component={AboutContainer} />
        </div>
      </Router>
    )
  }
}

export default App
