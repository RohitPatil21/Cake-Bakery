import logo from './logo.svg';
import './App.css';
import TopHeader, { Navbar } from './components/TopHeader';
import Header from './components/Header';
import Product from './components/Product';
import { useEffect, useState } from 'react';
import storeData from './components/data/ShopData.json'


function App() {
	return (

		<div>
			<TopHeader />
			<Navbar />
			<Header />
			<div className='product-container'>

			{storeData.map((elem) => {
				return (
				<Product name={elem.name} price={elem.price} imgUrl={elem.url}/>
				)
			})}

{/* 				
				<Product />
				<Product />
				<Product /> */}
			</div>
		</div>
	);
}

export default App;
