import { FormSpending } from '../components/FormSpending'
import { Register } from '../components/Register'

export const Home = () => {
  return (
    <>
      <main>
        <section>
          <Register />
        </section>

        <FormSpending />
      </main>
    </>
  )
}
