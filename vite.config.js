import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getGitHubPagesBase() {
  const repository = process.env.GITHUB_REPOSITORY

  if (!repository) {
    return '/'
  }

  const repoName = repository.split('/')[1]

  if (!repoName || repoName.endsWith('.github.io')) {
    return '/'
  }

  return `/${repoName}/`
}

export default defineConfig({
  base: getGitHubPagesBase(),
  plugins: [react()],
})
