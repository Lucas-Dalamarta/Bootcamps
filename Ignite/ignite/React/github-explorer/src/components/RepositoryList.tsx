import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.github.com/users/Lucas-Dalamarta/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  useEffect(() => {
    setTimeout(() =>
      setIsLoading(false),
      200
    )
  }, [repositories])

  const showLoading = () => (
    <h1>Loading</h1>
  )

  const loadRepositories = () => (
    <ul>
      { 
        repositories.map(repository => 
          <RepositoryItem key={repository.name} repository={repository} />
        )
      }
    </ul>
  )

  return (
    <section className='repository-list'>
      <h1>Repository List</h1>

      { isLoading ? showLoading() : loadRepositories() }
    </section>
  )
}