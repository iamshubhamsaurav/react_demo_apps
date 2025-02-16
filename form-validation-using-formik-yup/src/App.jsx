import { useFormik } from 'formik'
import * as Yup from 'yup'
function App() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      amount: '',
      name: '',
      aadhar: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }, validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email("enter a valid email"),
      amount: Yup.number('Amount must be a number').positive('Amount Must be positive').min(1, 'Amount must be more than 0'),
      password: Yup.string().required('Password is required').min(6, 'Password must  be at least 6 characters'),
      name: Yup.string().required('Name is required'),
      aadhar: Yup.string().required('Aadhar is required').length(12, 'Enter a valid aadhar')
    })
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <input 
            type='text' 
            name='name' 
            placeholder='Enter your name'
            value={formik.values.name} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>{formik.errors.name && formik.touched.name && formik.errors.name}</div>
        </div>
        <br/>
        <div className='field'>
          <input 
            type='email' 
            name='email' 
            placeholder='Enter your email'  
            value={formik.values.email} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>{formik.errors.email && formik.touched.email && formik.errors.email}</div>
        </div>
        <br/>
        <div className='field'>
          <input 
            type='password' 
            name='password' 
            placeholder='Enter your password'  
            value={formik.values.password} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>{formik.errors.password && formik.touched.password && formik.errors.password}</div>
        </div>
        <br/>
        <div className='field'>
          <input 
            type='text' 
            name='aadhar' 
            placeholder='Enter your aadhar'
            value={formik.values.aadhar} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>{formik.errors.aadhar && formik.touched.aadhar && formik.errors.aadhar}</div>
        </div>
        <br/>
        <div className='field'>
          <input 
            type='number' 
            name='amount' 
            placeholder='Enter your amount'
            value={formik.values.amount} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>{formik.errors.amount && formik.touched.amount && formik.errors.amount}</div>
        </div>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
