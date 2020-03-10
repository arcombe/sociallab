import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <h1 className="display-4">
                  Build <strong>social profiles</strong> and gain revenue
                  <strong>profits</strong>
                </h1>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi corrupti perspiciatis explicabo accusantium itaque!
                    Sint culpa cumque debitis rerum quia.
                  </div>
                </div>

                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi corrupti perspiciatis explicabo accusantium itaque!
                    Sint culpa cumque debitis rerum quia.
                  </div>
                </div>

                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi corrupti perspiciatis explicabo accusantium itaque!
                    Sint culpa cumque debitis rerum quia.
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-primary text-center card-form">
                  <div className="card-body">
                    <h4 className="display-5 mt-3">Sign Up Today</h4>
                    <p>Please fill out this form to register</p>

                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Username"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          value="subbmit"
                          className="btn btn-outline-light btn-block"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
