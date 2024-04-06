import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getIssue } from '../../services/getIssue'
import { Container } from './styles'
import Markdown from 'react-markdown'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export function Post() {
  const { id } = useParams()
  const issue = useQuery({
    queryKey: ['issue', id],
    queryFn: () => getIssue(id),
    enabled: !!id,
  })

  const bodyIssue = {
    body: issue.data?.data.body,
  }
  return (
    <Container>
      <Markdown
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          img: ({ node, ...rest }) => (
            <img
              style={{ maxWidth: '864px' }}
              alt=""
              {...(rest as DetailedHTMLProps<
                ImgHTMLAttributes<HTMLImageElement>,
                HTMLImageElement
              >)}
            />
          ),
        }}
      >
        {bodyIssue.body}
      </Markdown>
    </Container>
  )
}
