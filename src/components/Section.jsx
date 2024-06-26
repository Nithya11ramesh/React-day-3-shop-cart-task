/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Section = ({handleCount }) => {

    const allData = [
        {
          productName: "Fancy Product",
          price: "$40.00 - $80.00",
          discount: false,
          button: "View options",
          sale: false,
          rating: false,
        },
        {
          productName: "Special Item",
          price: "$20.00 $18.00",
          discount: true,
          button: "Add to cart",
          sale: true,
          rating: true,
        },
        {
          productName: "Sale Item",
          price: "$50.00 $25.00",
          discount: true,
          button: "Add to cart",
          sale: true,
          rating: false,
        },
        {
          productName: "Popular Item",
          price: "$40.00",
          discount: false,
          button: "Add to cart",
          sale: false,
          rating: true,
        },
        {
          productName: "Sale Item",
          price: "$50.00 $25.00",
          discount: true,
          button: "Add to cart",
          sale: true,
          rating: false,
        },
        {
          productName: "Fancy Product",
          price: "$120.00 - $280.00",
          discount: false,
          button: "View options",
          sale: false,
          rating: false,
        },
        {
          productName: "Special Item",
          price: "$20.00 $18.00",
          discount: true,
          button: "Add to cart",
          sale: true,
          rating: true,
        },
        {
          productName: "Popular Item",
          price: "$40.00",
          discount:false,
          button: "Add to cart",
          sale: false,
          rating: true,
        },
      ];
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2  row-cols-xl-4 justify-content-center">
          {allData.map((data, index) => (
            <Card key={index} data={data} handleCount={handleCount} />
          ))}
        </div>
      </div>
    </section>
  )
};

Section.propTypes = {
  data: PropTypes.string,
  handleCount:PropTypes.func,
  }
  
export default Section;