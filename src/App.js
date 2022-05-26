import React from "react";
import { createRoot } from 'react-dom/client';

import "./styles/main.css"

function App() {
      return (
          <div>App1</div>
      )  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);