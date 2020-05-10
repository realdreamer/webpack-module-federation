import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Host from './Host';
import SampleContext from './SampleContext';
import { LibSampleContext } from '../../utils';

const RemoteSimbaApp = React.lazy(() => import("simba/App"));
const RemotePumbaaApp = React.lazy(() => import("pumbaa/App"));

export default function ConsoleApp() {

  return (
    <div>
      <SampleContext.Provider value={{
        simba: 'Hey! Hi Simba..!',
        pumbaa: 'Whats up..? Pumbaaa... from console app',
        host: 'Hello Host'
      }}>
        <LibSampleContext.Provider value = {
            {
          simba: 'Hey! Hi Simba..!',
          pumbaa: 'Whats up..? Pumbaaa...',
          host: 'Hello Host'
        }}>
          <Router>
            <ul>
              <li>
                <Link to="/">Host</Link>
              </li>
              <li>
                <Link to="/simba">simba</Link>
              </li>
              <li>
                <Link to="/pumbaa">pumbaa</Link>
              </li>
            </ul>

            <hr />
            <React.Suspense fallback={"Loading"}>
              <Switch>
                <Route exact path="/">
                  <Host />
                </Route>
                <Route path="/simba">
                  <RemoteSimbaApp />
                </Route>
                <Route path="/pumbaa">
                  <RemotePumbaaApp />
                </Route>
              </Switch>
            </React.Suspense>
          </Router>
        </LibSampleContext.Provider>
      </SampleContext.Provider>
    </div>
  );
}
