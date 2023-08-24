import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../MyContext";
import { Link } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard";
import {toast} from 'react-toastify'

export default function CheckoutHome() {

  const { selectedCards, setSelectedCards } = useContext(ShoppingContext);
  const [selectedCardsPrice, setSelectedCardsPrice] = useState(0)
  const shippingPrice = 20

  useEffect(() => {
    setSelectedCardsPrice(selectedCards.reduce((acc, card) => acc + card.price, 0))
  }, [selectedCards])

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to='/shopping' className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {selectedCards.length} items in your cart</p>
                      </div>
                      {/* <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div> */}
                    </div>

                    <CheckoutCard
                      cartProducts={selectedCards}
                      setCardProducts={setSelectedCards}
                    />


                  </MDBCol>

                  {selectedCardsPrice > 0 ?
                    <MDBCol lg="5">
                      <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                              placeholder="Cardholder's Name" contrast />

                            <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                              minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                  minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                  maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${selectedCardsPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">${shippingPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${selectedCardsPrice + shippingPrice}</p>
                          </div>

                          <MDBBtn color="info" block size="lg" onClick={() => toast.info("Checkout in beta phase :)")}>
                            <div className="d-flex justify-content-between">
                              <span>${selectedCardsPrice + shippingPrice}</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol> : <></>}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}