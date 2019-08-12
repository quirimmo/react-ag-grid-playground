import React, { ReactElement } from 'react';
import './App.css';
import { FirstAgGridSample } from './components';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const App: React.FC = (): ReactElement => (
  <div className="App">
    <FirstAgGridSample />
  </div>
);

export default App;
