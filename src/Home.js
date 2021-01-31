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
      resumeData: {},
      resumeIndo: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeIndo() {
    $.ajax({
      url: "/resumeIndo.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeIndo: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
    this.getResumeIndo();
  }

  render() {
    const lng = this.props.lang;
    const { resumeIndo, resumeData } = this.state;
    return (
      <div className="App">
        <Header data={lng === "eng" ? resumeData.main : resumeIndo.main} />
        <About data={lng === "eng" ? resumeData.main : resumeIndo.main} />
        <Resume data={lng === "eng" ? resumeData.resume : resumeIndo.resume} />
        <Portfolio
          data={lng === "eng" ? resumeData.portfolio : resumeIndo.portfolio}
        />
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={lng === "eng" ? resumeData.main : resumeIndo.main} />
        <Footer data={lng === "eng" ? resumeData.main : resumeIndo.main} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { lang: state.lang.lang };
};

export default connect(mapStateToProps)(Home);
