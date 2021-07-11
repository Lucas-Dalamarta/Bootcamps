import { Header } from "./Header";
import { MoviesList } from "./MoviesList";

import '../styles/content.scss';

export function Content() {
  return (
    <div className="container">
      <Header />
      <MoviesList />
    </div>
        
  )
}