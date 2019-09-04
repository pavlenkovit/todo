import React from 'react';

import styles from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.SFC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Layout;
