import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import Authority from '@/pages/authority';
import stores from '@/store';
import route from '@/router';


function App(props: any) {
  return (
    <Provider store={stores}>
      {/* <Authority> */}
        <Router>
          <Switch>
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
        </Router>
      {/* </Authority> */}
    </Provider>
  )
}

// function App(props: any): JSX.Element {
//   return (
//     <Provider store={stores}>
//       <Authority routes={route}>
//         {/*<Canvas/>*/}
//         <Menu/>
//         <Router history={history}>
//           <Switch>
//             {
//               renderRoutes(route)
//             }
//           </Switch>
//         </Router>
//       </Authority>
//     </Provider>
//   );
// }

export default App;
