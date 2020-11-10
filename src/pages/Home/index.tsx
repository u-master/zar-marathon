import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.root}>
    <Header />
    <Layout className={styles.layout}>
      <div>
        <Heading>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('click!');
          }}
          size="normal">
          See pokemons
        </Button>
      </div>
      <div>
        <Parallax />
      </div>
    </Layout>
    <Footer />
  </div>
);

export default HomePage;
