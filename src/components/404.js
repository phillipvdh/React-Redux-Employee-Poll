import { connect } from "react-redux";

const Error404 = () => {
    return (
        <div>
            <h1 className="error-text mt-9">Error 404</h1>
            <h2 className="page-text mt-9">Page not found</h2>
        </div>
    );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error404);
