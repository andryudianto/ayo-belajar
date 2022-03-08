import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import routerPath from './RouterList';
import Login from '../views/Login';

function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route exact path={routerPath.root} element={<Login />} />
        <Route exact path={routerPath.login} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default RouterPath;
