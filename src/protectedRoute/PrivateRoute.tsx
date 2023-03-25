import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedProps {
  children: JSX.Element;
}
const PrivateRoute = ({ children }: ProtectedProps) => {
  const isLoggedIn = 'some parameter';
  if (isLoggedIn) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={{ pathname: '/' }} replace />;
  }
};

export default PrivateRoute;
