import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import Layout from '@/components/Layout';
import { MyLayout } from '@/components';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<{}, {}> {

  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.page}>
        <MyLayout />
      </div>
    )
  }
}
