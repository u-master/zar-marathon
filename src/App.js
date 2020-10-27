import React from 'react';
import cn from 'classnames';

import './index.css';
import styles from './App.modules.scss';

const App = () => {
    return (
        <div className={cn(styles.header, 'text_center')}>
            Application started!
        </div>
    );
}

export default App;