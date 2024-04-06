import { CalendarDays, ExternalLink, Github, MessageCircle } from 'lucide-react'
import {
  Container,
  DataUser,
  NameAndBio,
  NameAndLink,
  Name,
  Link,
  Infos,
  Info,
} from './styles'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getIssue } from '../../services/getIssue'
import { dateFormatted } from '../../utils/dateformatter'

export function IssueDetails() {
  const { id } = useParams()
  const issue = useQuery({
    queryKey: ['issue', id],
    queryFn: () => getIssue(id),
    enabled: !!id,
  })

  const IssueDetails = {
    title: issue.data?.data.title,
    link: issue.data?.data.html_url,
    username: issue.data?.data.user.login,
    comments: issue.data?.data.comments,
    createdAt: issue.data?.data.created_at,
  }

  return (
    <Container>
      <DataUser>
        <NameAndBio>
          <NameAndLink>
            <Name>{IssueDetails.title}</Name>
            <Link href={IssueDetails.link} target="_blank">
              Ver no Github
              <ExternalLink size={16} />
            </Link>
          </NameAndLink>
        </NameAndBio>

        <Infos>
          <Info>
            <Github size={18} />
            {IssueDetails.username}
          </Info>
          <Info>
            <CalendarDays size={18} />
            {dateFormatted(IssueDetails.createdAt)}
          </Info>
          <Info>
            <MessageCircle size={18} />
            {IssueDetails.comments} comentários
          </Info>
        </Infos>
      </DataUser>
    </Container>
  )
}
