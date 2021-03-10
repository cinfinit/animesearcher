import React, { Component } from "react";
import Coverflow from "reactjs-coverflow";
import Page1 from "./page";
import { carousalData } from "../store/actions/sampleaction";
import { connect } from "react-redux";
import { Modal, Card } from "antd";
const { Meta } = Card;
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      position: 0,
      isModalVisible: false,
      current_anime: {},
    };
  }
  componentDidMount = async () => {
    const { coverflow } = this.refs;
    this.setState({
      position: (coverflow && coverflow.getPosition()) || 0,
    });
    // (await this.props) && this.props.carousalData("beyblade");
  };
  handleMarginChange(e) {
    e.preventDefault();
    this.setState({ margin: parseFloat(e.currentTarget.value) });
  }
  prev(e) {
    e.preventDefault();
    this.refs.coverflow.previous();
  }
  next(e) {
    e.preventDefault();
    this.refs.coverflow.next();
    this.setState({});
  }
  onChange(position) {
    // console.log(`New position: ${position}`);

    // To test the issue of infinite callback, see https://github.com/Bastorx/reactjs-coverflow/issues/18
    this.setState({ position });
  }
  getPosition(e) {
    e.preventDefault();
    // console.log(this.refs.coverflow.getPosition());
  }
  goAt(num, e) {
    e.preventDefault();
    this.refs.coverflow.goAt(4);
  }
  getPage(num) {
    switch (num) {
      case 1:
        return Page1;
        break;
    }
  }
  changePage(page) {
    this.setState({ page }, function () {
      this.setState({
        position: this.refs.coverflow.getPosition(),
      });
    });
  }
  imageClicker = (anime_data) => {
    // console.log("current anime", anime_data);
    this.setState({ isModalVisible: true, current_anime: anime_data });
  };
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { page, position } = this.state;
    return (
      <div style={{ backgroundColor: "#1c77c0" }}>
        {/* {JSON.stringify(this.props.carousal_data)} */}
        <div class="row" style={{ padding: "13px" }}>
          {this.props && this.props.carousal_data.length >= 1
            ? this.props.carousal_data.map((i) => {
                return (
                  <div class="col-6 col-lg-3 text-center">
                    <Card
                      className="listcomponent"
                      hoverable
                      style={{
                        borderRadius: "5px",
                        height: "300px",
                        boxShadow: "0px 2px 12px",
                        border: "2px solid white",
                      }}
                      cover={
                        <img
                          alt="example"
                          onClick={() => this.imageClicker(i)}
                          src={i.image_url}
                          height="250px"
                        />
                      }
                    >
                      <Meta title={i.title} />
                    </Card>
                    <br />
                  </div>
                );
              })
            : "Please Enter the Name of your desired Anime Series"}
        </div>
        <Modal
          title="Anime Details"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div class="d-flex justify-content-center">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img alt="example" src={this.state.current_anime.image_url} />
              }
            >
              <Meta
                title={this.state.current_anime.title}
                description={this.state.current_anime.synopsis}
              />
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    carousal_data: state.sample.carousal_data,
  };
};

export default connect(mapStatetoProps, { carousalData })(Example);
