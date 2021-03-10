import React, { Component } from "react";
import "./dashboardstyle.css";
import CaraousalComp from "./carousalcomponent";
import { carousalData } from "../store/actions/sampleaction";
import { connect } from "react-redux";
import { baseAPI } from "../config/api_strings";
class Dashboard extends Component {
  state = {
    anime_name: "",
    err_message: "",
    fetching: false,
  };
  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = async () => {
    (await this.props) && this.props.carousalData("beyblade");
  };
  fetchData = async () => {
    if (this.state.anime_name === "") {
      this.setState({ err_message: "Please enter the name of the anime" });
    } else {
      (await this.props) && this.props.carousalData(this.state.anime_name);
      this.setState({ fetching: true, err_message: "" });
    }
  };
  render() {
    return (
      <div>
        <div class="container">
          <div class="row" style={{ marginTop: "100px" }}>
            <div class="col-sm col-lg text-center">
              <input
                class="inputele"
                name="anime_name"
                placeholder="Anime Searcher"
                onChange={this.inputHandler}
              />

              <button class="buttonele" onClick={this.fetchData}>
                {" "}
                Go
              </button>
              {this.state.err_message.length >= 1 ? (
                <p style={{ color: "white" }}>{this.state.err_message}</p>
              ) : null}
              {this.state.fetching == true && (
                <p style={{ color: "white" }}>
                  Requesting : {baseAPI}
                  {this.state.anime_name}&limit=16
                </p>
              )}
            </div>
          </div>
        </div>
        <CaraousalComp />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    carousal_data: state.sample.carousal_data,
  };
};

export default connect(mapStatetoProps, { carousalData })(Dashboard);
