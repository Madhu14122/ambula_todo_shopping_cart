import React, { useEffect, useState, useRef } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios'
import '../App.css'

function ShoppingCard({ selectedCards, setSelectedCards }) {
	const [products, setProducts] = useState([])
	const [currentTimestamp, setCurrentTimestamp] = useState(Date.now());

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
			.then(res => setProducts(res.data))
	}, [])

	const intervalRef = useRef();


	useEffect(() => {
		intervalRef.current = getInterval();
		return () => clearInterval(intervalRef.current);
	}, []);

	const getInterval = () => {
		const startTime = new Date().getTime();
		const progressInterval = setInterval(() => {
			// do on each interval
		}, 10);
		return progressInterval;
	};
	function getUniqueId() {
		return Math.floor(Math.random() * 100)
	}

	function addToCart(product, index) {

		setSelectedCards([...selectedCards, product])
		toast.success(`${product.title.substring(0, 35)} added to cart`)
	}

	console.log(selectedCards)
	return (
		products.map((product, index) => {
			return (
				<div className="col-md-12 col-lg-4 my-4 mb-lg-0" key={index}>
					<div className="card">
						<img src={product.image}
							className="card-img-top p-4" style={{ width: '300px', height: '200px', objectFit: 'contain' }} />
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<p className="small"><a href="#!" className="text-muted">{product.category}</a></p>
							</div>

							<div className="d-flex justify-content-between mb-3">
								<h5 className="mb-0">{product.title.substring(0, 35)}</h5>
							</div>
							<div className="d-flex justify-content-between mb-3">
								<h5 className="text-dark mb-0 mt-2">Price: ${product.price}</h5>
								<MDBBtn rounded outline className='mx-2' color='dark' onClick={() => addToCart(product, getInterval())}>
									Add to Cart
								</MDBBtn>
							</div>
						</div>
					</div>
				</div>

			)
		})

	)
}

export default ShoppingCard
