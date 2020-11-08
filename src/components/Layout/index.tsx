import React from 'react';
import cn from 'classnames';

import styles from './Layout.module.scss';

interface LayoutProps {
  className: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={cn(className, styles.root)}>{children}</div>
);

export default Layout;
