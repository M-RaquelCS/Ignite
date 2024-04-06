import { Building, ExternalLink, Github, UsersRound } from 'lucide-react'
import {
  Container,
  Image,
  DataUser,
  NameAndBio,
  NameAndLink,
  Name,
  Link,
  Infos,
  Info,
} from './styles'

import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../services/getUser'

export function Profile() {
  const user = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  })

  const profile = {
    id: user.data?.data.id,
    login: user.data?.data.login,
    name: user.data?.data.name,
    bio: user.data?.data.bio,
    avatar_url: user.data?.data.avatar_url,
    company: user.data?.data.company,
    followers: user.data?.data.followers,
    html_url: user.data?.data.html_url,
  }

  if (user.isPending) return 'loading...'
  return (
    <Container>
      <Image src={profile.avatar_url} alt="" />
      <DataUser>
        <NameAndBio>
          <NameAndLink>
            <Name>{profile.name}</Name>
            <Link href={profile.html_url} target="_blank">
              Github
              <ExternalLink size={16} />
            </Link>
          </NameAndLink>

          <p>{profile.bio}</p>
        </NameAndBio>

        <Infos>
          <Info>
            <Github size={18} />
            {profile.login}
          </Info>
          <Info>
            <Building size={18} />
            {profile.company}
          </Info>
          <Info>
            <UsersRound size={18} />
            {profile.followers} seguidores
          </Info>
        </Infos>
      </DataUser>
    </Container>
  )
}
