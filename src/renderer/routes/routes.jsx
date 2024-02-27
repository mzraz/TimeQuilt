import React from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import ProtectedRoute from './protectedRoute';
// import Login from '../modules/auth/login';
// import Register from '../modules/auth/register';
// import Home from '../modules/ServiceProvider/home';
import AnimateRoute from './animateRoute';
// import Index from '../modules/eventCreator/pages/Index';
import Login from '../pages/login';
// import {
//   SERVICE_PROVIDER_ID,
//   EVENT_CREATOR_ID,
// } from '../../utils/client_config';

const AppRoutes = ({ token, role_id }) => {
  return (
    <Router>
      <Routes>
        {token == '' && (
          <>
            <Route
              exact
              path="/login"
              element={
                <AnimateRoute>
                  <Login />
                </AnimateRoute>
              }
            />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </>
        )}

        {/* {role_id && (
          <>
            {SERVICE_PROVIDER_ID === role_id && (
              <>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <ProfileData />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/detail"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <DetailPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/editProfile"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <EditProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pending-events"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <PendingEvents />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/negotiation-events"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <NegotiationEvents />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/deals-events"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <DealsEvents />
                    </ProtectedRoute>
                  }
                />
              </>
            )}

            {EVENT_CREATOR_ID === role_id && (
              <>
                <Route
                  exact
                  path="/"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <Index />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/event"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <EventsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/event-detail"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <CreateEventDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/view-bids"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <ViewBids />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/bids-detail"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <ViewBidsAgainstEvent />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/bid-profile"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <ViewBidProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/edit-event-profile"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <EditEventProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/event-profile"
                  element={
                    <ProtectedRoute token={token} redirectPath={'/login'}>
                      <EventProfile />
                    </ProtectedRoute>
                  }
                />
              </>
            )}
          </>
        )} */}

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
