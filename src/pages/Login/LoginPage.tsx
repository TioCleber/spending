import { Login } from './'

import './../../styles/login.css'

const LoginPage = () => {
  return (
    <section className="section-login">
      <Login.Institutional />

      <Login.Action />
    </section>
  )
}

export default LoginPage
