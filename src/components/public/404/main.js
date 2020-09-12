import React, { Component } from "react";
import "./style.css";

export class main extends Component {
  render() {
    return (
      <>
        <title>404 :(</title>
        <div>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              height: "100%",
              width: "100%",
              backgroundColor: "#95c2de",
            }}
          ></div>
          <div className="mainbox">
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap"
              rel="stylesheet"
            />
            <script
              src="https://kit.fontawesome.com/4b9ba14b0f.js"
              crossorigin="anonymous"
            ></script>
            <div className="mainbox">
              <div className="err0">4</div>
              <div className="err1">0</div>
              <div className="err2">4</div>
              <div className="msg">
                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                Never existed in the first place?
                <p>
                  Let's go <a href="/">home</a> and try from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default main;
