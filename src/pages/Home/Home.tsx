import { useState } from 'react'
import { Cards } from '../../components/Cards'
import { Modal } from '../../components/Modal'
import { useSpending } from '../../hooks/useSpending'
import { formatCurrency } from '../../utils/formatCurrency'
import { FormSpending } from '../components/FormSpending'
import { ListSpending } from '../components/ListSpending'

export const Home = () => {
  const { totalSpending, spending, refetch } = useSpending()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <main>
        <section>
          <Cards>
            <div>
              <h3>Gastos:</h3>

              <p>Total de gastos: {formatCurrency(totalSpending)}</p>

              <div>
                <ul>
                  {spending.map((item) => (
                    <li key={item.name}>
                      <p>
                        {item.name}: {item.totalValues}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button onClick={handleClick}>Adicionar gastos</button>
          </Cards>
        </section>

        <section>
          <ListSpending spending={spending} />
        </section>
      </main>

      {open && (
        <Modal onClose={handleClick}>
          <FormSpending onClose={handleClick} refetch={refetch} />
        </Modal>
      )}
    </>
  )
}
