import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "./../components/Globals/BackgroundSection"
import { graphql } from "gatsby"
import Title from "./../components/Globals/Title"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Erreur 404"
      styleClass="about-background"
    />
    <section className="py-5">
      <div className="container">
        <Title title="Oops..." />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Le lien que vous avez saisi n'existe pas...
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "pageError.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
