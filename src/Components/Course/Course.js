import React from 'react';
import './Course.css'

const Course = (props) => {
    const {course, author, email, phone, courseImage, authorImage,  price} = props.course;
    return (
        <div className="course py-4 p-md-0 row">
             <div className="col-lg-4 "><img className="courseImage img-fluid" src={courseImage} alt=""/></div>
             <div className="col-lg-8 py-2">
                <h4 className="text-md-left pt-2"> {course} </h4>
                <div className="row text-md-left">
                    <div className="col-md-8  pb-2">
                        <div className="courseName d-flex justify-content-center justify-content-md-start ">
                            <h5 className="mentor "> Mentor: {author} </h5> 
                            <img className="ml-2 authorImage" src={authorImage} alt=""/>
                        </div>
                        <p><small>{email}</small></p>
                        <p><small>{phone}</small></p>
                    </div>
                    <div  className="col-md-4 mt-3 mt-md-0">
                        <p>Discount Price: ${price}</p>
                        <p className="coursePrice">Course Price: ${Number(price) + Number(price)/10}</p>
                        <button className="addToCart d-block w-100"
                        onClick={ () =>props.addToCart(props.course)}>ENROLL NOW</button>
                    </div>
                </div>
                 
             </div>
            
        </div>
    );
};

export default Course;