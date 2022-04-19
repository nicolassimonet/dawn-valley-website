import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/components/navigation.css";
import "./styles/pages/styles.css";
import "./styles/pages/home.css";
import "./styles/components/footer.css";
import "./styles/pages/rules.css";
import "./styles/pages/vote.css";
import "./styles/pages/gallery.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);