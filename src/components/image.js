import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, className, style }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {
        internal: {
          mediaType: {
            regex: "/image/"
          }
        }
      }) {
        edges {
          node {
            relativePath
            extension
            publicURL
          }
        }
      }
    }
  `)

  const match = data.allFile.edges.filter(edge => {
    if (edge.node.relativePath == src) return true;
  }).map(edge => edge.node);

  if (match.length > 0) {
    return <img className={className} style={style} src={match[0].publicURL} />
  }
  
  return null;
}

export default Image
