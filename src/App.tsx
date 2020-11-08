import React from 'react';

import styles from './App.module.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div>Application started!</div>
    <Footer />
  </div>
);

export default App;
