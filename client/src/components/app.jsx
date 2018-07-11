import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import BlogList from './bloglist'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">HOME</button></Link>
                    <Link to="/blogs"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">Blog Posts</button></Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/blogs" component={BlogList} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;