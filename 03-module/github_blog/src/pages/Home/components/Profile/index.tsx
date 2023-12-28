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

export function Profile() {
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <DataUser>
        <NameAndBio>
          <NameAndLink>
            <Name>Raquel Santos</Name>
            <Link href="/">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </NameAndLink>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </NameAndBio>

        <Infos>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            M-RaquelCS
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            Grupo Moura
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </Info>
        </Infos>
      </DataUser>
    </Container>
  )
}
