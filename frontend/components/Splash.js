import { Component } from "react";
import { Row, Col } from "reactstrap";
import Icon from "./Icons/Index";
export class Splash extends Component {
  render() {
    return (
      <section className="splash">
        <div className="splash-switcher-container d-flex text-center rtl justify-content-center">
          <Row className="text-center rtl">
            <Col>
              <div className="d-flex switcher flex-column text-center justify-content-center align-items-center">
                <div>
                  <Icon icon="TOUR" style={{ fill: "white" }} className="my-2 flat-icon large-icon"/>
                  <span className="my-2">تور</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex switcher flex-column text-center justify-content-center align-items-center">
                <div>
                  <Icon icon="SERVICE" style={{ fill: "white" }} className="my-2 flat-icon large-icon"/>
                  <span className="my-2">خدمات</span>
                </div>
              </div>
            </Col>
            <Col>
            <div className="d-flex switcher flex-column text-center justify-content-center align-items-center active">
                <div>
                  <Icon icon="MAGAZINE" style={{ fill: "white" }} className="my-2 flat-icon large-icon"/>
                  <span className="my-2">مجله</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Splash;
