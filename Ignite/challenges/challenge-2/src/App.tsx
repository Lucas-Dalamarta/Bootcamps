import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreProvider } from "./contexts/GenreProvider";

import './styles/global.scss';

export function App() {
  return (
    <GenreProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GenreProvider>
  )
}