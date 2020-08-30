import React from 'react';
import LoginForm from './LoginForm';
import styles from'./index.module.scss';




export default class Login extends React.Component<{}, {}> {
  render() {
    return <div className={styles.login_layout}>
      <div className={styles.header}>后台管理系统</div>
      <div className={styles.form}>
        <LoginForm 
          history={this.props.history}
        />
      </div>
    </div>
  }
}