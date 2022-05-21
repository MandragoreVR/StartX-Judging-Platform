import './App.css';
import Header from './components/Header/Header';
import { LeftPanel, RightPanel } from './components';
import { Group } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <Header/>
      <Group spacing={0}>
        <LeftPanel />
        <RightPanel />
      </Group>
    </div>
  );
}

export default App;
