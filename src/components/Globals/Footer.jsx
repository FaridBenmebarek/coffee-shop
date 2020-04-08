import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>
              tous droits réservés &copy;{new Date().getFullYear().toString()}
            </h3>
            <h6>
              Réalisé par{" "}
              <a
                href="http://farid-benmebarek.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="amiral"
              >
                Farid Benmebarek
              </a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
