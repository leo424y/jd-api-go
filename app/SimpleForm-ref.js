// import React from 'react'
// import { connect } from 'react-redux'
// import { Field, reduxForm, formValueSelector } from 'redux-form'
//
// let SimpleForm = (props) => {
//   const { isBeautician, handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>新增資料</label>
//       </div>
//       <div>
//         <label>名稱</label>
//         <div>
//           <Field name="name" component="input" type="text" placeholder="台中會館；張美美"/>
//         </div>
//       </div>
//       <div>
//         <label htmlFor="isBeautician">門市人員？</label>
//         <div>
//           <Field name="isBeautician" id="isBeautician" component="input" type="checkbox"/>
//         </div>
//       </div>
//       {isBeautician &&
//       <div>
//         <label>美容師資料</label>
//         <div>
//           <label>電話</label>
//           <Field name="phone" component="input" type="text" placeholder="0988123456"/>
//           <label>職稱</label>
//           <Field name="title" component="select">
//             <option value="1">美容師</option>
//             <option value="2">店長</option>
//           </Field>
//           <label>所屬分店</label>
//           <Field name="store_id" component="select">
//             <option value="0">未設定</option>
//             <option value="1">大台中會館</option>
//             <option value="2">大台北會館</option>
//           </Field>
//         </div>
//       </div>
//       }
//       {/* <div>
//         <label>Last Name</label>
//         <div>
//           <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
//         </div>
//       </div> */}
//       {/* <div>
//         <label>Email</label>
//         <div>
//           <Field name="email" component="input" type="email" placeholder="Email"/>
//         </div>
//       </div>
//       <div>
//         <label>電話</label>
//         <div>
//           <Field name="status" component="input" type="text" placeholder="0966123456"/>
//         </div>
//       </div>*/}
//       {/* <div>
//         <label>Sex</label>
//         <div>
//           <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
//           <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
//         </div>
//       </div> */}
//       {/* <div>
//         <label>Favorite Color</label>
//         <div>
//           <Field name="favoriteColor" component="select">
//             <option></option>
//             <option value="ff0000">Red</option>
//             <option value="00ff00">Green</option>
//             <option value="0000ff">Blue</option>
//           </Field>
//         </div>
//       </div>
//       <div>
//         <label htmlFor="employed">在職</label>
//         <div>
//           <Field name="employed" id="employed" component="input" type="checkbox"/>
//         </div>
//       </div>
//       <div>
//         <label>備註</label>
//         <div>
//           <Field name="notes" component="textarea"/>
//         </div>
//       </div>*/}
//       <div>
//         <button type="submit" disabled={pristine || submitting}>送出</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>重填</button>
//       </div>
//     </form>
//   )
// }
//
// SimpleForm = reduxForm({
//   form: 'simple'  // a unique identifier for this form
// })(SimpleForm)
//
// const selector = formValueSelector('simple')
// SimpleForm = connect(
//   state => {
//     // can select values individually
//     const isBeautician = selector(state, 'isBeautician')
//     return {
//       isBeautician
//     }
//   }
// )(SimpleForm)
//
// export default SimpleForm
