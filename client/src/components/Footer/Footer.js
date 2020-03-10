import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer id="main-footer" className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center py-4">
              <h3>SocialLAB</h3>
              <p>Copyright &copy; {year}</p>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#contactModal"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="modal fade text-dark" id="contactModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button className="close" data-dismiss="modal"></button>
                <span>&times;</span>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary btn-block" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
