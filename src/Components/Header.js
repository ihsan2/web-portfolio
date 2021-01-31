import React, { Component } from "react";
import { changeLanguage } from "../Redux/langAction";
import { connect } from "react-redux";

class Header extends Component {
  _click = (e) => {
    e.preventDefault();
    const lang = this.props.lang === "eng" ? "ind" : "eng";

    this.props.change(lang);
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var country = this.props.data.address.country;

      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href={"#"} className="smoothscroll" onClick={this._click}>
                {this.props.lang === "eng" ? "Indonesia" : "English"}
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            {this.props.lang === "eng" ? (
              <h3>
                I'm a {country} based <span>{occupation}</span>. {description}.
              </h3>
            ) : (
              <h3>
                Saya adalah <span>{occupation}</span> berbasis di {country}.{" "}
                {description}.
              </h3>
            )}

            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return { lang: state.lang.lang };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    change: (lang) => dispatch(changeLanguage(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
