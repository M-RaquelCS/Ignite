import { octokit } from '../lib/octokit'

export async function searchIssue(text: string = '') {
  const issue = await octokit.request(
    `GET /search/issues?q=${text}%20repo:m-raquelcs/ignite`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  )

  return issue
}
