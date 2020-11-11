import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';
import Heading from '../../components/Heading';

import RocketTeamPng from './assets/rocket.png';
import styles from './NotFound.module.scss';

const NotFoundPage: React.FC = () => (
  <div className={styles.root}>
    <img src={RocketTeamPng} alt="Rocket Team" />
    <Heading size="h3" className={styles.hwhole}>
      <span className={styles.hlight}>The rocket team</span>
      <span className={styles.hdark}> has won this time.</span>
    </Heading>
    <Button
      color="yellow"
      onClick={() => {
        navigate('/');
      }}>
      Return
    </Button>
  </div>
);

export default NotFoundPage;
