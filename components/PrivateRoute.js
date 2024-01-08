import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, loggedIn }) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`} />;
};

const mapStateToProps = ({ authedUser }) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);