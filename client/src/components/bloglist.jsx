import React, { Component } from 'react';
import Blog from './blogtemplate'

class BlogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []

        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs',
                {
                    method: 'GET'
                });
            let blogs = await res.json();
            this.setState({ blogs })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let blogPosts = this.state.blogs.map((blog) => {
            return <Blog key={blog.id} blogData={blog} />
        }
        )
        return (
            <React.Fragment>
                <div>{blogPosts}</div>
            </React.Fragment>
        )
    }
}

export default BlogList;


