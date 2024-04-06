import { octokit } from '../lib/octokit'

export async function getUser() {
  const user = await octokit.request('GET /users/{username}', {
    username: 'M-RaquelCS',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  return user
}
