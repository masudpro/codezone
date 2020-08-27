import React from 'react';
import './App.css';
import CourseApi from './CourseApi/CourseApi.js';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';



function App() {
  const randomChane = [...CourseApi];

  const randomData = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

randomData(randomChane);

  const [courses, setCourse] = useState(randomChane);
  const [cart, setCart] = useState([]);
  console.log(courses);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart)
  }
  const totalPrice = cart.reduce((acc, current) => acc + Number(current.price), 0);

  return (
    <div className="container-fluid">  
    <div className="App row">

    <div className="text-center m-auto py-4"><h1 >Well come to our CodeZone</h1></div>
        <div className="course-body col-sm-7 col-md-8 col-lg-9">
          {
        courses.map(singleCourse => <Course
                        course = {singleCourse}
                        addToCart={addToCart}
                    > </Course>)
                }
        </div>

        <div className="cart-body col-sm-5 col-md-4 col-lg-3">
          <h3 className="text-center">Course Item:  {cart.length} </h3>
          <button type="button" className="BuyNow btn-block mb-4">
            BUY NOW <span className="badge">$ {totalPrice}</span>
          </button>
          
          {cart.map(item => <Cart item = {item}  > </Cart>) }

         
         
        </div>
        
    </div>
    </div>
  );
}

export default App;
