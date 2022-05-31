import React from "react";
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar";


import "./styles/main.css"
import Card from "./components/Card"
import carddata from "./data/carddata";
function App() {
        const cardelement = carddata.map(data => {
            return   <Card title={data.title} key={data.title}></Card>
        })
      return (
          <div>
              <Navbar></Navbar>
              {cardelement}
          </div>
      );  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);