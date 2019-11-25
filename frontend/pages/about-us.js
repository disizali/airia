import React, { Component } from "react";
import Layout from "../components/Layout";
import Cover from "../components/Cover";
import { Container, Row, Col } from "reactstrap";
const list = [
  [
    "ear",
    "گفت خنثی و شنود موثر",
    "ما در آیریا گفته‌های همکاران را بدون پیش‌زمینه می‌شنویم و اهل پیش‌داوری نیستم. ضمن اینکه همیشه منظورمان را واضح و بدون تفسیر بیان می‌کنیم."
  ],
  [
    "file-certificate",
    "حرمت کلام",
    "ما در آیریا برای انجام وظایفمان منتظر کلمه‌ها هستیم، نه دستورالعمل و نامه‌ی رسمی؛ درست مثل یک خانواده."
  ],
  [
    "fingerprint",
    "عاملیت",
    "همه‌ی آیریایی‌ها خودشان را مسئول انجام دادن و یا انجام ندادن کارهای‌شان می‌دانند و این مسئولیت را در تمام مدت زندگی کاری‌شان پذیرفته‌اند."
  ],
  [
    "network-wired",
    "روابط شبکه ای",
    "ما در آیریا به دنبال برقراری روابط میان فردیِ فراتر از سِمَت، سطح و واحد هستیم تا با تجربه‌ها و تخصص یکدیگر آشنا شویم و سرمایه‌ی اجتماعی آیریا را افزایش دهیم."
  ]
  ,
  [
    "briefcase",
    "تعهد حرفه ای",
    "ما در علی‌بابا به دنبال ارزیابی تعهد در تمامی ابعاد آن بوده و در پی ارزش افزوده‌ی دو طرفه از سمت سازمان و برای سازمان هستیم."
  ]
  ,
  [
    "dumbbell",
    "توانمند سازی",
    "ما در علی‌بابا به دنبال ارتقای دائمی دانش و مهارت‌ها در ابعاد رفتاری و شغلی، و بهینه‌سازی توانایی‌ها در راستای نیازهای سازمان هستیم."
  ]
  ,
  [
    "chart-line",
    "توسعه و تعالی",
    "ما در علی‌بابا به دنبال تسهیل تعالی علی‌بابا هستیم؛ تا جایی که زمینه‌ی تعالی واحدهای سازمانی و خود را فراهم کنیم."
  ]
  ,
  [
    "users-class",
    "تیم سازی",
    "ما در علی‌بابا برای ایده‌ی خود به دنبال تیم هستیم، تیمی که با همراهی آن، ایده را عملی و در نهایت به محصول تبدیل کنیم."
  ]
];
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: null };
  }
  render() {
    return (
      <Layout>
        <Cover title="درباره ما" />
        <Container className="privacy-container rtl text-right">
          <div className="box-container mt-4">
            <div className="box-title">
              <span>آیریا</span>
            </div>
            <div className="text-muted">
              <p>
                عازم کجا هستید؟ هیچ فرقی نمی‌کند. این حق شماست که سفری باکیفیت،
                آسان و مطمئن را تجربه کنید. آیریا، به عنوان رتبه یک فروش بلیط
                سفر در کنار شماست تا تجربه‌ای شایسته از یک سفر به‌یادماندنی را
                ایجاد کند.
              </p>
              <p>
                سفر باید آسان باشد، مطمئن و به‌صرفه؛ و همه اینها در آیریا خلاصه
                شده. از هر کجا به هر کجا، با هواپیما، قطار، اتوبوس یا تور. حتی
                برای اقامت شایسته در سفرهای خارجی می‌توانید روی هتل‌های آیریا
                حساب کنید.
              </p>
              <p>
                آیریا همسفر حرفه‌ای‌هاست، و این تجربه‌ی حرفه‌ای در همه مراحل سفر
                همراه شماست. از زمانی که قصد سفرکرده‌اید و نیاز به راهنمایی
                دارید ، تا خرید بلیط و پشتیبانی 24 ساعته توسط تیم 247 نفره مرکز
                پشتیبانی. حتی وقتی که برنامه سفرتان تغییر کرده و قصد استرداد
                بلیط را دارید ما در کنار شما هستیم.
              </p>
              <p>
                آیریا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر)
                است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت شما در سکوی اول
                گردشگری کشور ایستاده. ما به این جایگاه قانع نشده‌ایم و تلاش‌مان
                برای بهبود لحظه‌ای متوقف نمی‌شود. البته در این مسیر پرپیچ‌و‌خم
                تنها نیستیم و همسفران شایسته‌ای چون شما دلگرمی اصلی ماست.
              </p>
              <p>
                آمارها نشان می‌دهد که بیشتر از 97 درصد از مشتریان، ما را به
                دیگران توصیه کرده‌اند و سفیر پیام آیریا شده‌اند. مطمئن هستیم راه
                را درست رفته‌ایم، چرا که مورداعتماد شما هستیم.
              </p>
            </div>
          </div>
          <div className="box-container mt-4">
            <div className="box-title">
              <span>ارزش های آیریا</span>
            </div>
            <div className="text-muted">
              <p>
                آیریا یک خانواده بزرگ است؛ خانواده‌ای که در آن روابط افراد بر
                اساس اعتماد و همکاری متقابل تعریف شده. در بین اعضای این خانواده
                ارزش‌هایی شکل گرفته تا کار کردن به یک فعالیت لذت‌بخش تبدیل شود.
              </p>
            </div>
          </div>
          <Row className="p-2 about-row">
            {list.map((item, index) => {
              return (
                <Col sm={6} md={3} key={index} className="h-100 p-2">
                  <div className="d-flex flex-column text-center p-2 box-container h-100">
                    <i
                      className={`fad fa-${item[0]} text-second font-medium my-2`}
                    />
                    <h5 className="my-2">{item[1]}</h5>
                    <hr className="bg-muted w-100" />
                    <p className="text-muted">{item[2]}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
    );
  }
}
