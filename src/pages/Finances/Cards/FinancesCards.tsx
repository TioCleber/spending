import { useProfile } from './../../../context/ProfileContext'

import { Context } from './../../../context'

import { Skeleton } from '@mui/material'
import { Finances } from './../'
import { Profile } from './../../../components/Profile'
import LinkCustom from './../../../components/Links/Link'

const FinancesCards = () => {
  const { profile } = useProfile()

  return (
    <Profile.Wrapper
      Then={
        <Finances.Wrapper.Cards>
          <Finances.Card>
            <Finances.Wrapper.Titles>
              <Skeleton
                className="skeleton"
                variant="rectangular"
                width="100%"
                height={28}
              />

              <Skeleton
                className="skeleton"
                variant="rectangular"
                width="100%"
                height={22}
              />
            </Finances.Wrapper.Titles>
          </Finances.Card>

          <Finances.Card>
            <Finances.Wrapper.Titles>
              <Finances.Wrapper.Action>
                <Skeleton
                  className="skeleton"
                  variant="rectangular"
                  width="100%"
                  height={30}
                />
              </Finances.Wrapper.Action>
            </Finances.Wrapper.Titles>
          </Finances.Card>

          <Finances.Card>
            <Finances.Wrapper.Titles>
              <Finances.Wrapper.Action>
                <Skeleton
                  className="skeleton"
                  variant="rectangular"
                  width="100%"
                  height={30}
                />
              </Finances.Wrapper.Action>
            </Finances.Wrapper.Titles>
          </Finances.Card>
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
          </Finances.Card>
          <Finances.Card>
            <Finances.Wrapper.Action>
              <Finances.Title.Subtitle text="Aqui estão seus gastos:" />
              <Context.Modal>
                <Finances.Add.Spending />
              </Context.Modal>
            </Finances.Wrapper.Action>
            <Finances.Wrapper.Links>
              <LinkCustom text="ver mais" to="/spending" />
            </Finances.Wrapper.Links>
          </Finances.Card>
          <Finances.Card>
            <Finances.Wrapper.Action>
              <Finances.Title.Subtitle text="Aqui estão suas despesas:" />
              <Context.Modal>
                <Finances.Add.Expenses />
              </Context.Modal>
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
