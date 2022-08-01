import { Formik, Field } from 'formik';
import Layout from "../components/layout";

export default function() {
  return (
    <Layout>
      <h1>
        Contact us
      </h1>
      <Formik
        initialValues={{ name: '', email: '' }}>
        {props => (
          <form className="form">
            <label htmlFor='name-input' className="form-label">Name</label>
            <Field 
              id="name-input" 
              className="form-input"
              type="text"
              name="name"/>

            <label htmlFor='email-input' className="form-label">Email</label>
            <Field
              id="email" 
              className="form-input" 
              type="email"
              name="email"/>

            <label htmlFor='msg-text' className="form-label">Message</label>
            <Field 
              id="msg-text" 
              className="form-message" 
              type="text"
              name="message"/>
              
             <button id="submit-button" type='submit' className="form-btn" onClick={() => alert('Message Sent!')}>Submit</button>
          </form>
        )}
      </Formik>
    </Layout>
  )
}