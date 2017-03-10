import '../assets/stylesheets/base.scss'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const dig= /^[0-9]{10}$/
let validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = '必填'
  } else if (values.name.length > 10) {
    errors.name = '太長囉'
  }
  if (!values.phone) {
    errors.phone = '必填'
  } else if (!dig.test(values.phone)) {
    errors.phone = '請填10碼'
  }
  return errors
}

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)


let SimpleForm = (props) => {
  const { isBeautician, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>新增門市或美容師</label>
      </div>
      <div>
        <label>名稱</label>
        <div>
          <Field name="name" component={renderField} type="text" placeholder="某某店 或 某某某"/>
        </div>
      </div>
      <div>
        <label htmlFor="isBeautician">門市人員？</label>
        <div>
          <Field name="isBeautician" id="isBeautician" component={renderField} type="checkbox" onChange={showStores}/>
        </div>
      </div>
      {isBeautician &&
      <div>
        <label>美容師資料</label>
        <div>
          <label>電話</label>
          <Field name="phone" component={renderField} type="text" placeholder="0988123456"/>
          <label>職稱</label>
          <Field name="title" component="select">
            <option value="1">美容師</option>
            <option value="2">店長</option>
          </Field>
          <label>所屬分店</label>
          <Field name="store_id" component="select" id="store_selector">
            <option value="0">未設定</option>
          </Field>
        </div>
      </div>
      }
      <div>
        <button type="submit" disabled={pristine || submitting}>送出</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>重填</button>
      </div>
    </form>
  )
}

SimpleForm = reduxForm({
  form: 'simple',  // a unique identifier for this form
  validate
})(SimpleForm)

const selector = formValueSelector('simple')
SimpleForm = connect(
  state => {
    // can select values individually
    const isBeautician = selector(state, 'isBeautician')
    return {
      isBeautician
    }
  }
)(SimpleForm)

export default SimpleForm

function showStores() {
  fetch('https://jd-api-staging.herokuapp.com/api/v1/stores/')
  .then(r => r.json())
  .then(function (j) {
    let select = document.getElementById('store_selector')
    for (let i = 0; i < j.stores.length; i++) {
      let option = document.createElement('option')
      option.value = j.stores[i].id
      option.textContent = j.stores[i].name
      select.appendChild(option)
    }
  }
  )
}
