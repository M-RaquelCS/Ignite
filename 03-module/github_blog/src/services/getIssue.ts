import { octokit } from '../lib/octokit'

export async function getIssue(id: string | undefined) {
  const issue = await octokit.request('GET /repos/{owner}/{repo}/issues/{id}', {
    owner: 'M-RaquelCS',
    repo: 'Ignite',
    id,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  return issue
}
