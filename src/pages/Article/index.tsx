import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import Layout from '@/components/Layout';
import { MyLayout } from '@/components';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Article extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.page}>
         article
      </div>
    )
  }
}
