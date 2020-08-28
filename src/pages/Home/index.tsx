import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { IProps, IState } from './interface';
import styles from './index.module.scss';

@connect(({ user }) => ({ user }))
export default class Home extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.page}>
        <Button>jlkjl</Button>
      </div>
    )
  }
}
