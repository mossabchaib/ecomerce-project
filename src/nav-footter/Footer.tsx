
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/navigation';
export default function Footer() {
  return (
    <div>
<footer className="text-center text-lg-start bg-white text-dark">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
        Information
          </h6>
          <p>
            <a href="#!" className="text-reset">FAQ</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Selling Conditions</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Delivery price</a>
          </p>
         
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
           About us
          </h6>
          <p>
            <a href="#!" className="text-reset">Who are me?</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contact us</a>
          </p>
         
        </div>
     

 
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">Dopamine Medical Emporium</h6>
          <p><i className="fas fa-home me-3"></i> Address</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
       E-mail
          </p>
          <p><i className="fas fa-phone me-3"></i> phne number</p>
          
        </div>

      </div>

    </div>
  </section>
 
  <div className="text-center p-4" style={{backgroundColor:' rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>
  </div>
  )
}
