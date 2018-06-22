import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import registerServiceWorker from './registerServiceWorker'
import 'antd/dist/antd.css'
import store from './store/store'

const render = Component => {
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
)
}

render()
store.subscribe(render)
registerServiceWorker()
