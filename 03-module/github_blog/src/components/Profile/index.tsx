import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
import { useEffect, useState } from 'react'

export function Profile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState({} as any)

  useEffect(() => {
    fetch('https://api.github.com/users/M-RaquelCS')
      .then((response) => response.json())
      .then((data) => setUserData(data))
  }, [])
  // é de longe uma opção viável chamar aqui e assim mas é o que temos

  return (
    <Container>
      <Image src={userData.avatar_url} alt="" />
      <DataUser>
        <NameAndBio>
          <NameAndLink>
            <Name>{userData.name}</Name>
            <Link href={userData.html_url} target="_blank">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </NameAndLink>

          <p>{userData.bio}</p>
        </NameAndBio>

        <Infos>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            {userData.login}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            {userData.company}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            {userData.followers} seguidores
          </Info>
        </Infos>
      </DataUser>
    </Container>
  )
}
