import { ReactNode } from 'react'
import { useProfile } from '../../context/ProfileContext'

interface ProfileWrapperProps {
  Then: ReactNode
  Else: ReactNode
}

const ProfileWrapper = ({ Else, Then }: ProfileWrapperProps) => {
  const { isAuthenticated, profile } = useProfile()

  console.log(profile)

  return <>{!isAuthenticated || !profile ? <>{Then}</> : <>{Else}</>}</>
}

export default ProfileWrapper
