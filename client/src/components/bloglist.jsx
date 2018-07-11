import React, { Component } from 'react';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []

        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs');
            let blogs = await res.json();
            this.setState({ blogs })
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        let blogPosts = this.state.blogs.map((blog, index) =>
            <div key={index}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
            </div>


        )

        return (<div>
            {blogPosts}
        </div>)

    }
}

export default Blog;