import React from "react";
import { FaClock, FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div class="container py-5" id="contact">
        <div class="text-center">
          <h3 class="fs-2 fw-bold">Contact Me</h3>
          <p class="fw-light pt-3">
            Submit the form below or you can directly send me email/whatsapp me
            to get in touch with me
          </p>
        </div>
        <div class="row pt-5 gy-3 d-flex justify-content-center align-items-center">
          <div class="col-md-12 col-lg-5">
            <div class="row gy-4">
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <FaLocationArrow className="fs-5 icon-color" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Address</h5>
                    <p class="card-text small fw-light">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <FaMobile className="fs-5 icon-color" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Call Me</h5>
                    <p class="card-text small fw-light">+8801749006471</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <FaEnvelope className="fs-5 icon-color" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Email Us</h5>
                    <p class="card-text small fw-light">
                      dev.rakibulhassan@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <FaClock className="fs-5 icon-color" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Working Hours</h5>
                    <p class="card-text small fw-light">24/7 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-5">
            <form
              action="https://getform.io/f/868bae5c-819b-4df3-b4cd-60759e202e67"
              method="POST"
            >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Your Name"
                  name="name"
                  required
                  aria-label="Example text"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  name="email"
                  required
                  placeholder="Your Email"
                  aria-label="Example text"
                />
              </div>
              <div class="input-group mb-3">
                <textarea
                  class="form-control"
                  name="message"
                  required
                  id=""
                  cols="30"
                  rows="6"
                >
                  Message
                </textarea>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-contact form-control py-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
