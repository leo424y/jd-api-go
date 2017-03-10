import React from 'react'
import ReactDOM from 'react-dom'
import List from 'list.js'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import App from './components/App'

const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = values => new Promise(resolve => {
  const resources = values.isBeautician ? 'beauticians' : 'stores'
  const resource = values.isBeautician ? 'beautician' : 'store'

  function constructJson(jsonKey, jsonValue) {
    let jsonObj = {}
    jsonObj[jsonKey] = jsonValue
    return jsonObj
  }

  setTimeout(() => { // simulate server latency
    window.alert(JSON.stringify( constructJson(resource, values) ))
    fetch(`https://jd-api-staging.herokuapp.com/api/v1/${resources}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( constructJson(resource, values) )
      // body: JSON.stringify({ beautician: { title: '1', name: '美', phone: '093123', store_id: '1', isBeautician: 'true' } })
    })
    resolve()
  }, 500)
})

let render = () => {
  const SimpleForm = require('./components/App').default
  ReactDOM.render(
    <Provider store={store}>
    <SimpleForm onSubmit={showResults}/>
  </Provider>, dest)
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} className="redbox"/>, dest)
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./components/App', rerender)
  module.hot.accept('!!raw!./components/App', rerender)
}

render()


//listjs
const options = {
  valueNames: [ 'name', 'phone' , 'title', 'store_id' ]
}


document.addEventListener('DOMContentLoaded', function () {
  fetch('https://jd-api-staging.herokuapp.com/api/v1/beauticians/')
  .then(r => r.json())
  .then(function (j) {
    for (let i = 0; i < j.beauticians.length; i++) {
      const userList = new List('users',options)
      userList.add({
        name: j.beauticians[i].name,
        phone: j.beauticians[i].phone,
        title: j.beauticians[i].title==1 ? '美容師' : '店長',
        store_id: j.beauticians[i].store_id
      })
    }
  }
  )
}, false)
