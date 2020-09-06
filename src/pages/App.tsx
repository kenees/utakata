import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import history from '@/router/history'
// import Authority from '@/pages/authority';
import { MyLayout } from '@/components'
import stores from '@/store';
import route from '@/router';
import Login from '@/pages/Login';

function App(props: any) {
  return (
    <Provider store={stores}>
      {/* <Authority> */}
    
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <MyLayout>  
               <Switch>
                 <Route exact path='/' render={() => <Redirect to='/home' />} />
                  {
                    route.map((item, i) => {
                      if(item.exact) {
                        return <Route exact path={item.path} component={item.component} key={i} />
                      } else {
                        return <Route path={item.path} component={item.component} key={i} />
                      }
                    })
                  }
                </Switch>
            </MyLayout>
          </Switch>
          
        </Router>
      {/* </Authority> */}
    </Provider>
  )
}

export default App;
