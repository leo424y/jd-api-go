import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostBeautician = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>新增分店</label>
      </div>
      <div>
        <label>名稱</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="張美美"/>
        </div>
      </div>
      {/* <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div> */}
      {/* <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>電話</label>
        <div>
          <Field name="status" component="input" type="text" placeholder="0966123456"/>
        </div>
      </div>*/}
      {/* <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div> */}
      {/* <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label>職稱</label>
        <div>
          <Field name="title" component="select">
            <option value="1">美容師</option>
            <option value="2">店長</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">在職</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>備註</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>*/}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'postbeautician'  // a unique identifier for this form
})(PostBeautician)
