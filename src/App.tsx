import React from 'react';
import cn from 'classnames';

import './index.css';
import styles from './App.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <div className={cn(styles.header, 'text_center')}>Application started!</div>;
    <Footer />
  </>
);

export default App;
