import React, { Component } from 'react';
import imageUrl from './logo.png';
import backgroundUrl from '../img/bg1.jpg';

// BELOW = preloader div (insert into line 15 if desired)
// <div id="preloader">
// <div id="load"></div>
// </div>


class Greetings extends Component {
  render () {
    return (
      <div id="page-top" data-spy="scroll" data-target=".navbar-custom">

        <section id="intro" className="intro">
          <img src={backgroundUrl}/>
        </section>

        <section id="about" className="home-section text-center">
          <div className="heading-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="wow bounceInDown" data-wow-delay="0.4s">
                    <div className="section-heading">
                      <h3>Created by</h3>
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
                      <h5>Yohan Wiputra</h5>
                      <p className="subtitle">Not Late</p>
                      <div className="avatar"><img src="img/team/1.jpg" alt="" className="img-responsive img-circle" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="wow bounceInUp" data-wow-delay="0.5s">
                  <div className="team boxed-grey">
                    <div className="inner">
                      <h5>Helen Lee</h5>
                        <p className="subtitle">Late</p>
                        <div className="avatar"><img src="img/team/2.jpg" alt="" className="img-responsive img-circle" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="wow bounceInUp" data-wow-delay="0.8s">
                  <div className="team boxed-grey">
                    <div className="inner">
                      <h5>Victor Cortez</h5>
                      <p className="subtitle">Late</p>
                      <div className="avatar"><img src="img/team/3.jpg" alt="" className="img-responsive img-circle" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 col-md-3">
                <div className="wow bounceInUp" data-wow-delay="1s">
                  <div className="team boxed-grey">
                    <div className="inner">
                      <h5>John Wong</h5>
                      <p className="subtitle">Late</p>
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
