import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import BlogList from './bloglist';
import SingleBlog from './singleblog'
import AddPost from './addpost'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">HOME</button></Link>
                    <Link to="/blogs"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">Blog Posts</button></Link>
                    <Link to="/addpost"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">Add Post</button></Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/blogs" component={BlogList} />
                        <Route path="/blogs/:id" component={SingleBlog} />
                        <Route path="/addpost" component={AddPost} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;