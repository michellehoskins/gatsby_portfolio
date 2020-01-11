import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { Link } from "gatsby"

const Blog = ({data}) => (
          <Layout>
            <div id="bg-img">
              <main id="blog">
                <h1 className="lg-heading">My <span className="text-secondary">Blog</span></h1>
                <h2 className="sm-heading">
                  Latest Posts
                </h2>
              <div className="blog-info">
                
              <div className="blog">
                {data.allMarkdownRemark.edges.map(post => (
                  <div key={ post.node.id }>
                    <h3 className="text-secondary">{post.node.frontmatter.title}</h3>
                    <small>Posted on {post.node.frontmatter.date}</small>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                    <hr />
                  </div>
                ))}
              </div>

      </div>
    </main>
            </div>
            </Layout>
        )

export const pageQuery = graphql`
  query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
  }
`

export default Blog;