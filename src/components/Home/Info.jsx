import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Notre Histoire" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              atque necessitatibus nulla ullam aspernatur veniam harum tempora
              iure doloribus omnis! Sapiente accusantium, ad ducimus voluptatum
              ab possimus dolores ex a doloremque perferendis asperiores
              necessitatibus laboriosam iste blanditiis similique architecto
              consequatur deserunt doloribus autem sunt fugiat repellendus
              reiciendis enim? Exercitationem error perspiciatis perferendis
              iste iure repellendus cupiditate recusandae sunt veritatis
              aspernatur.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                A propos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
