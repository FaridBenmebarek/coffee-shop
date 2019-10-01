import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%", maxHeight: "320px" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="product-title">{product.title}</h6>
          <h6>{product.price}€</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}
