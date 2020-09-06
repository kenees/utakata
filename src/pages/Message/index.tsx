import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import Layout from '@/components/Layout';
import { MyLayout } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Message extends React.Component<{}, {}> {

  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.page}>
          message
      </div>
    )
  }
}
