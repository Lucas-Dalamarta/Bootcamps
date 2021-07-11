interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export const RepositoryItem = ({repository} : RepositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name}</strong>

      <p>{repository.description}</p>
      <a href={repository.html_url}>
        Access repository
      </a>
    </li>
  )
}