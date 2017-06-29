import "./Header.css";

import React, { Component } from "react";

export default class Header extends Component {
  toggleNav = () => {
    document.body.style.overflow = document.body.style.overflow !== "hidden" ? "hidden" : "";
    this.nav.classList.toggle("Header__nav--shown");
  };

  render() {
    return (
      <header className="Header">
        <div className="Header__top">
          <a className="Header__nav--toggle" onClick={this.toggleNav}>
            <svg viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </a>
          <div>
            um site do
            <h1 className="logo">
              web<span>edia.</span>
            </h1>group
          </div>
        </div>
        <nav
          className="Header__nav"
          ref={c => {
            this.nav = c;
          }}
        >
          <a>lorem ipsum</a>
          <a>lorem ipsum</a>
          <a>lorem ipsum</a>
          <a>lorem ipsum</a>
          <a>lorem ipsum</a>
          <a>lorem ipsum</a>
        </nav>
      </header>
    );
  }
}
