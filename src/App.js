import React from "react";
import { createRoot } from 'react-dom/client';

function App() {
      return (
          <div>App1</div>
      )  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);