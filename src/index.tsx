import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import './index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AlgoliaProvider from './context/Algolia';
import RestaurantsProvider from './context/Restaurants';
import messages_en from './translations/en.json';
import messages_fr from './translations/fr.json';

enum LOCALES {
  EN = 'en',
  FR = 'fr'
}

const MESSAGES = {
  [LOCALES.EN]: messages_en,
  [LOCALES.FR]: messages_fr
};

const iconValue = {
  style: { verticalAlign: 'middle' },
  size: '2rem'
};

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={iconValue}>
      <IntlProvider locale={LOCALES.EN} messages={MESSAGES[LOCALES.EN]}>
        <AlgoliaProvider>
          <RestaurantsProvider>
            <App />
          </RestaurantsProvider>
        </AlgoliaProvider>
      </IntlProvider>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
