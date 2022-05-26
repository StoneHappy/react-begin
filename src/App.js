import React from "react";
import { createRoot } from 'react-dom/client';

import "./styles/main.css"

import airbnblogo from "./images/airbnb-logo.png"

function App() {
      return (
          <div>
              <img src={airbnblogo}></img>
          </div>
      );  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);