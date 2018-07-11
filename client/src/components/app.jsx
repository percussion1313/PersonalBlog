import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import BlogList from './bloglist'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/blogs">Blogs</Link>
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