import React from 'react';
import { Link } from 'react-router-dom'

let Blog = ({ blogData }) => {
    return (

        <div>
            <div className="card-header bg-light m-4 col-6 d-flex mx-auto position-relative">{blogData.title}
                <div className="card-body bg-dark text-white">{blogData.content}


                    {/* <Link key={blogData} className="badge badge-light text-dark float-right" to={`/blogs/${blogdata.id}`}>Details</Link> */}
                </div>

            </div>
        </div>
    )
}

export default Blog