import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

export class Footer extends Component {
  render() {
    return (
      <footer className="d-flex flex-column">
        <div className="footer-social">
          <Container className="rtl">
            <Row className="py-4">
              <Col className="pr-0 border-left d-flex align-items-center">
                <i className="far fa-share-alt text-main ml-2"></i>
                <span className="mx-2">آیریا در شبکه های اجتماعی</span>
                <div className="social-instagram p-1 text-right text-light d-flex align-items-center">
                  <i className="fab fa-instagram mx-2"></i>
                  <span className=" mx-2">اینستاگرام</span>
                </div>
                <div className="social-twitter text-light mx-2">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social-telegram text-light mx-2">
                  <i className="fab fa-telegram"></i>
                </div>
              </Col>
              <Col className="pl-0 d-flex newsletter">
                <input
                  className="form-control mx-2 h-100"
                  placeholder="آدرس ایمیل شما"
                />
                <Button color="primary" className="mr-2 w-50">
                  عضویت در خبرنامه
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-links">
          <Container className="rtl text-right">
            <Row className="py-5">
              <Col sm={12} md={4}>
                <h5>آیریا</h5>
                <ul className="p-3">
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>چرا آیریا</li>
                  <li>باشگاه مشتریان</li>
                  <li>قوانین و مقررات</li>
                  <li>راهنمای خرید</li>
                  <li>پرسش و پاسخ</li>
                  <li>مجله</li>
                  <li>فرصت های شغلی</li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <h5>اطلاعات تکمیلی</h5>
                <ul className="p-3">
                  <li>راهنمای رزرو تور داخلی</li>
                  <li>راهنمای رزرو تور خارجی</li>
                  <li>شیوه نامه حقوق مسافر</li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <img
                  src="/static/images/logo.png"
                  alt="airia logo"
                  width="100%"
                  className="footer-logo mb-3"
                />
                <span className="my-3">خیابان شهید بهشتی،نبش میرعماد،ساختمان گلدیس،طبقه دوم ،واحد 204</span>
                <Row className="p-0 mt-3">
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/enamad.png" width="100%" />
                  </Col>
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/samandehi.png" width="100%" />
                  </Col>
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/etehadie.png" width="100%" />
                  </Col>
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/mosafer.png" width="100%" />
                  </Col>
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/mosafer.png" width="100%" />
                  </Col>
                  <Col
                    className="trust-container text-center bg-white rounded shadow m-1 d-flex align-items-center w-25 h-25"
                    sm={1}
                  >
                    <img src="/static/images/mosafer.png" width="100%" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-fixer d-block d-md-none">
        </div>
      </footer>
    );
  }
}

export default Footer;
