import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <div>
            <Layout>
            <Link to ="/Blog/">Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }){
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`