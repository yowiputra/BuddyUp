import React, { Component } from 'react';


// BELOW = preloader div (insert into line 15 if desired)
// <div id="preloader">
// <div id="load"></div>
// </div>


class Greetings extends Component {
  render () {
    return (
      <div id="page-top" data-spy="scroll" data-target=".navbar-custom">
        { (true ? <video src="/greetingsPageVid.mp4" autoPlay /> : undefined) }
      
        <section id="intro" className="intro">
          <div className="slogan">
            <h2>WELCOME TO <span className="text_color">BUDDYUP</span> </h2>
            <h4>DESIGNED TO PAIR UP FOR DOTA2</h4>
          </div>
          <div className="page-scroll">
            <a href="#service" className="btn btn-circle">
              <i className="fa fa-angle-double-down animated"></i>
            </a>
          </div>
        </section>

        <section id="about" className="home-section text-center">
          <div className="heading-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="wow bounceInDown" data-wow-delay="0.4s">
                    <div className="section-heading">
                      <h2>About us</h2>
                      <i className="fa fa-2x fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-5">
              <hr className="marginbot-50"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="wow bounceInUp" data-wow-delay="0.2s">
                <div className="team boxed-grey">
                  <div className="inner">
                    <h5>Anna Hanaceck</h5>
                    <p className="subtitle">Pixel Crafter</p>
                    <div className="avatar"><img src="img/team/1.jpg" alt="" className="img-responsive img-circle" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="wow bounceInUp" data-wow-delay="0.5s">
                <div className="team boxed-grey">
                  <div className="inner">
                    <h5>Maura Daniels</h5>
                      <p className="subtitle">Ruby on Rails</p>
                      <div className="avatar"><img src="img/team/2.jpg" alt="" className="img-responsive img-circle" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="wow bounceInUp" data-wow-delay="0.8s">
                <div className="team boxed-grey">
                  <div className="inner">
                    <h5>Jack Briane</h5>
                    <p className="subtitle">jQuery Ninja</p>
                    <div className="avatar"><img src="img/team/3.jpg" alt="" className="img-responsive img-circle" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="wow bounceInUp" data-wow-delay="1s">
                <div className="team boxed-grey">
                  <div className="inner">
                    <h5>Tom Petterson</h5>
                    <p className="subtitle">Typographer</p>
                    <div className="avatar"><img src="img/team/4.jpg" alt="" className="img-responsive img-circle" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>		
        </div>
      </section>
    </div>
    );
  }
}

export default Greetings;
