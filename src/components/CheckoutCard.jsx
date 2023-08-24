import React from 'react'
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

function CheckoutCard({ cartProducts, setCardProducts }) {
  
  const deleteCheckoutItem = (event, cardId) => {
    setCardProducts(cartProducts.filter(card => card.id !== cardId))
  }

  return (
    cartProducts.map((card, index) => {
      return (
        <MDBCard className="mb-3">
          <MDBCardBody>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <MDBCardImage
                    src={card.image}
                    fluid className="rounded-3" style={{ width: "65px" }}
                    alt="Shopping item" />
                </div>
                <div className="ms-3">
                  <MDBTypography tag="h5">
                    {card.title}
                  </MDBTypography>
                  <p className="small mb-0">{card.category}</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                {/* <div style={{ width: "50px" }}>
                  <MDBTypography tag="h5" className="fw-normal mb-0">
                    2
                  </MDBTypography>
                </div> */}
                <div style={{ width: "80px" }}>
                  <MDBTypography tag="h5" className="mb-0">
                    ${card.price}
                  </MDBTypography>
                </div>
                <a onClick={(event) => deleteCheckoutItem(event, card.id)} style={{ color: "#cecece" }}>
                  <MDBIcon fas icon="trash-alt" />
                </a>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      )
    })

  )
}

export default CheckoutCard