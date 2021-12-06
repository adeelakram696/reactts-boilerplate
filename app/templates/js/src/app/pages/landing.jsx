import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from 'assets/logo.svg';

const landingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="App-header">
        <Logo width={50} />
      </header>
      <span>
        <span>{t('Learn')}</span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </>
  );
};

export default landingPage;
