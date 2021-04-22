import React, { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

import NavBar from './NavBar.jsx';
import FrontPage from './FrontPage.jsx';
import SeekerPortal from './SeekerPortal.jsx';
import JobPortal from './JobPortal.jsx';
import EmployerDashboard from './EmployerDashboard.jsx';
import EmployerSearch from './EmployerSearch.jsx';
import schema from './constants.jsx';

const App = () => {
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [accountType, setAccountType] = useState('');
  const [seekerData, setSeekerData] = useState(null);
  return (
    <HashRouter>
      <schema.GlobalStyle />
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/seeker">
          <SeekerPortal email={email} setSeekerData={setSeekerData} />
        </Route>
        <Route path="/jobs">
          <JobPortal seekerData={seekerData} />
        </Route>
        <Route path="/employer">
          <EmployerDashboard email={email} />
        </Route>
        <Route path="/employerSearch">
          <EmployerSearch />
        </Route>
        <Route path="/">
          <FrontPage
            setUserID={(id) => setUserID(id)}
            setAccountType={(type) => setAccountType(type)}
            bubbleUpEmail={(val) => setEmail(val)}
            bubbleUpCompany={(val) => setCompany(val)}
          />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
