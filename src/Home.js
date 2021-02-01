import React, { Component } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeDataEng: {},
      resumeDataIdn: {},
    };
  }

  getResumeDataEng() {
    $.ajax({
      url: "/resumeDataEng.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeDataEng: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataIdn() {
    $.ajax({
      url: "/resumeDataIdn.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeDataIdn: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeDataEng();
    this.getResumeDataIdn();
  }

  render() {
    const lng = this.props.lang;
    const { resumeDataIdn, resumeDataEng } = this.state;
    return (
      <div className="App">
        <Header
          data={lng === "eng" ? resumeDataEng.main : resumeDataIdn.main}
        />
        <About data={lng === "eng" ? resumeDataEng.main : resumeDataIdn.main} />
        <Resume
          data={lng === "eng" ? resumeDataEng.resume : resumeDataIdn.resume}
        />
        <Portfolio
          data={
            lng === "eng" ? resumeDataEng.portfolio : resumeDataIdn.portfolio
          }
        />
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact
          data={lng === "eng" ? resumeDataEng.main : resumeDataIdn.main}
        />
        <Footer
          data={lng === "eng" ? resumeDataEng.main : resumeDataIdn.main}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { lang: state.lang.lang };
};

export default connect(mapStateToProps)(Home);
