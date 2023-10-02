import { useProfile } from '../../context/ProfileContext'

import { ModalContextProvider } from '../../context/ModalContext'

import { Skeleton } from '@mui/material'
import { Finances } from './'
import { Profile } from '../../components/Profile'
import LinkCustom from '../../components/Links/Link'

const FinancesCards = () => {
  const { profile } = useProfile()

  return (
    <Profile.Wrapper
      Then={
        <Finances.Wrapper.Cards>
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
          <Skeleton
            className="skeleton"
            variant="rectangular"
            width="100%"
            height={200}
          />
        </Finances.Wrapper.Cards>
      }
      Else={
        <Finances.Wrapper.Cards>
          <Finances.Card>
            <Finances.Wrapper.Titles>
              <Finances.Title.Profile
                firstName={profile?.firstName || ''}
                lastName={profile?.lastName || ''}
              />

              <Finances.Title.Subtitle text="Aqui está sua finança de hoje:" />
            </Finances.Wrapper.Titles>
            
            <div className="titles">
              <Finances.Title.Profile
                firstName={profile?.firstName || ''}
                lastName={profile?.lastName || ''}
              />

              <Finances.Title.Subtitle text="Aqui está sua finança de hoje:" />
            </div>
          </Finances.Card>

          <Finances.Card>
            <Finances.Wrapper.Action>
              <Finances.Title.Subtitle text="Aqui estão suas despesas:" />

              <ModalContextProvider>
                <Finances.Add.Expenses />
              </ModalContextProvider>
            </Finances.Wrapper.Action>

            <Finances.Wrapper.Links>
              <LinkCustom text="ver mais" to="/recurring-expenses" />
            </Finances.Wrapper.Links>
          </Finances.Card>

          <Finances.Card>
            <Finances.Wrapper.Action>
              <Finances.Title.Subtitle text="Aqui estão seus gastos:" />

              <ModalContextProvider>
                <Finances.Add.Spending />
              </ModalContextProvider>
            </Finances.Wrapper.Action>

            <Finances.Wrapper.Links>
              <LinkCustom text="ver mais" to="/recurring-expenses" />
            </Finances.Wrapper.Links>
          </Finances.Card>
        </Finances.Wrapper.Cards>
      }
    />
  )
}

export default FinancesCards
