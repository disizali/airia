import { Component } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import Icon from "./Icons";
export class Splash extends Component {
  constructor(props) {
    super(props);
    this.getTabName = this.getTabName.bind(this);
  }

  getTabName() {
    switch (this.props.tab) {
      case 1:
        return "tour";
      case 2:
        return "service";
      case 3:
        return "magazine";
    }
  }

  render() {
    const { tab, changeTab } = this.props;
    return (
      <section className="splash">
        <div
          className={`align-items-center splash-switcher-container d-flex text-center rtl justify-content-center flex-column ${this.getTabName()} w-100`}
        >
          <Row className="text-center rtl my-sm-0 my-md-2">
            <Col>
              <div
                className={`d-flex switcher flex-column text-center justify-content-center align-items-center ${tab ==
                  1 && "active"}`}
                onClick={() => changeTab(1)}
              >
                <div>
                  <Icon
                    icon="TOUR"
                    style={{
                      fill: tab == 1 ? "#ffad00" : "white",
                      transition: "all 0.3s"
                    }}
                    className="my-sm-0 my-md-2 flat-icon large-icon"
                  />
                  <span className="my-sm-0 my-md-2">تور</span>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className={`d-flex switcher flex-column text-center justify-content-center align-items-center ${tab ==
                  2 && "active"}`}
                onClick={() => changeTab(2)}
              >
                <div>
                  <Icon
                    icon="SERVICE"
                    style={{
                      fill: tab == 2 ? "#ffad00" : "white",
                      transition: "all 0.3s"
                    }}
                    className="my-sm-0 my-md-2 flat-icon large-icon"
                  />
                  <span className="my-sm-0 my-md-2">خدمات</span>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className={`d-flex switcher flex-column text-center justify-content-center align-items-center ${tab ==
                  3 && "active"}`}
                onClick={() => changeTab(3)}
              >
                <div>
                  <Icon
                    icon="MAGAZINE"
                    style={{
                      fill: tab == 3 ? "#ffad00" : "white",
                      transition: "all 0.3s"
                    }}
                    className="my-sm-0 my-md-2 flat-icon large-icon"
                  />
                  <span className="my-sm-0 my-md-2">مجله</span>
                </div>
              </div>
            </Col>
          </Row>

          <Container className="w-100 search-panel d-none d-md-inline-block">
            <Row className="h-100">
              <Col sm={10}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="text-box px-5"
                  placeholder="دنبال چه چیزی میگردید ؟ ..."
                />
              </Col>
              <Col sm={2}>
                <Button className="search-button h-100">جستجو</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Splash;
