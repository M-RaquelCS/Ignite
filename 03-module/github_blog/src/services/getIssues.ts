import { octokit } from '../lib/octokit'

export async function getIssues() {
  const issues = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'M-RaquelCS',
    repo: 'Ignite',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  return issues
}
