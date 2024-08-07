import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Comman = (props) => {
  
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row" style={{marginBottom: props.greating == "" ? "3.4em" : ""}}>
            {/* we use only 10 colum out of 12 and show in center */}
            <div className="col-10 mx-auto">
              <div className="row">
                {/* <div className="col-md-6 pt-5 pt-lg-0  order-1 order-lg-1 d-flex  justify-content-center flex-column"> */}
                <div className="col-md-6 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={{height: props.greating == "Welcome To" ? "3.4em" : "" }}>
                    {props.greating} <br />{" "}
                    <strong className="brand-name">
                      {" "}
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 40,
                          deleteSpeed: 20,
                          strings: [props.name, props.name1],
                        }}
                      />
                    </strong>
                  </h1>
                  <h2 className="my-3 txt d-none d-lg-block ">{props.content}</h2>
                  <h1>
                    <strong className="brand-name">{props.name2}</strong>
                  </h1>
                  <h2 className="my-3 txt">{props.content2}</h2>
                  <div className="mt-1">
                    <NavLink to={props.src2} className="btn-get-product">
                      {props.btn2}
                    </NavLink>{" "}
                    {"  "}
                    <NavLink to={props.src} className="btn-get-product">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>

                {/* <div className="col-lg-6  order-1 order-lg-2 header-img"> */}
                <div className="col-lg-6 order-1 order-lg-2 header-img d-none d-md-block">
                  <img
                    src={props.img}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
