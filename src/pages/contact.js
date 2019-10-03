import React from "react"
import Layout from "./../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import BackgroundSection from "./../components/Globals/BackgroundSection"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Nous Contacter"
        styleClass="about-background"
      />
      <section className="contact contact-text py-5">
        <div className="row">
          <div className="col-10 col-sm-8 col-6 mx-auto">
            <form
              action="https://formspree.io/farid.benmebarek@hotmail.fr"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
