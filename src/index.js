import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import registerServiceWorker from './registerServiceWorker'
import './style/reset.css'
import 'antd/dist/antd.css'
import store from './store/store'
import { Provider } from 'react-redux'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
registerServiceWorker()
