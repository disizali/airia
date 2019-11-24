import React, { Component } from "react";
import Layout from "../components/Layout";
import Cover from "../components/Cover";
import { Container, Row, Col } from "reactstrap";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: null };
  }
  render() {
    return (
      <Layout>
        <Cover title="تماس با ما" />
        <Container className="rtl text-right">
          <div className="box-container mt-4">
            <div className="box-title">
              <span>تیم آیریا</span>
            </div>
            <div className="text-muted">
              <p>
                اگر راهنمای خرید بلیط را خوانده باشید و قوانین و مقررات آژانس
                هواپیمایی علی‌بابا را هم از نظرتان گذرانده باشید، بعید است به
                مشکلی بربخورید؛ اما در هر صـورت اگر بنا به هـر دلیلـی به مشـورت
                با همکاران ما و بخش پشتیبانیِ شبانه‌روزی ما احتیاج داشتید،
                مـی‌توانید در هر لحظه، یا با شمـاره تلفن ۴۳۹۰۰۰۰۰-۰۲۱ تمـاس
                بگیرید و یا از طریق فرم زیر، موضوع را با ما در میان بگذارید تا
                هرچه زودتر به آن رسیدگی کنیم.
              </p>
            </div>
          </div>
          <div className="box-container mt-4">
            <div className="box-title">
              <span>با ما در تماس باشید</span>
            </div>
            <div className="text-muted">
              <Row>
                <Col sm={12} md={8}>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="my-3">
                      <h5>آدرس</h5>
                      <i className="fad fa-map-marker-alt text-second ml-2" />
                      <span className="text-dark d-inline-block ml-2">
                        دفتر شهید بهشتی :
                      </span>
                      <span className="text-muted d-inline-block">
                        خیابان شهید بهشتی،نبش میرعماد،ساختمان گلدیس،طبقه دوم
                        ،واحد 204
                      </span>
                    </div>
                    <div className="my-3">
                      <h5>راه های ارتباطی</h5>
                      <i className="fad fa-headset text-success ml-2" />
                      <span className="text-dark d-inline-block ml-2">
                        شماره تماس :
                      </span>
                      <span className="text-muted d-inline-block">
                        ۰۲۱-۵۷۸۹۲
                      </span>
                      <br />
                      <i className="fad fa-at text-success ml-2" />
                      <span className="text-dark d-inline-block ml-2">
                        ایمیل :
                      </span>
                      <span className="text-muted d-inline-block">
                        info@airiatravel.com
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.159423630576!2d51.41342298594628!3d35.73574933600438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8226eace07c63ce!2sAiria%20Co.!5e0!3m2!1sen!2s!4v1574583275640!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullscreen=""
                  ></iframe>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
