import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
            <div className="col s12 center-align">
                <h4>
                    <b>Build</b>
                    <span style={{fontFamily:"monospace"}}>MERN</span>
                </h4>
                    <p className="flow-text grey-text text-darken-1">
                        Add your own todo!
                    </p>
                    <br />
                    <a style={{
                        width: "150px",
                        borderRadius:"3px",
                        letterSpacing:"1.5px"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Register
                    </a>
                    <a
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </a>
            </div>
        </div>
      </div>
    )
  }
}
