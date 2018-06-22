import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const AuthExample = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">public page</Link>
          </li>
          <li>
            <Link to="/protected">protected page</Link>
          </li>
        </ul>
        <hr />
        <Route path="/public" component={Public} />
        <Route path="/protected" component={Protected} />
        <Route exact path="/" render={() => <Protected />} />
        {/* 重定向 */}
        {/* <Route
          exact
          path="/protected"
          render={() =>
            <Redirect to="/public" />
          }
        /> */}
      </div>
    </Router>
  )
}

const Public = ({ match }) => {
  console.log(match)
  return (
    <Router>
      <div>
        <h3>Public</h3>
        <ul>
          <li>
            <Link to={`${match.url}/one`}>one</Link>
          </li>
          <li>
            <Link to={`${match.url}/two`}>two</Link>
          </li>
          <li>
            <Link to={`${match.url}/three`}>three</Link>
          </li>
        </ul>
        <Route path={`${match.url}/one`} component={One} />
        <Route path={`${match.url}/two`} component={Two} />
        <Route path={`${match.url}/three`} component={Three} />
        <Route exact path={match.url} render={() => <One />} />
      </div>
    </Router>
  )
}
const Protected = () => <h3>Protected</h3>
const One = () => <h3>One</h3>
const Two = () => <h3>Two</h3>
const Three = () => <h3>Three</h3>

export default AuthExample
