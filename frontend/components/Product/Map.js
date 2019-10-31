// import { GoogleMap, Marker } from "react-google-maps";

import { Button } from "reactstrap";

export default props => {
  return (
    <div
      sm={12}
      md={4}
      className="box-container d-flex justify-content-start flex-column align-items-start w-100 h-100"
    >
      <h3 className="box-title pr-3">اطلاعات</h3>
      <iframe
        className="rounded mb-2"
        src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d823031.9016076779!2d50.77364876476353!3d36.313073973275124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!3m2!1d35.6891975!2d51.3889736!4m5!1s0x3f8b0a0a479b7cdd%3A0x94065ff637ee276!2z2LHYp9mF2LPYsdiMIE1hemFuZGFyYW4gUHJvdmluY2UsIElyYW4!3m2!1d36.9268274!2d50.643065799999995!4m5!1s0x3f8efdf2a3fc7385%3A0x1f76f83486da57be!2sNur%2C%20Mazandaran%20Province%2C%20Iran!3m2!1d36.5750373!2d52.026838!5e0!3m2!1sen!2sus!4v1570966310223!5m2!1sen!2sus"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
      <Button className="form-control pdf-button w-100" color="primary">
        دانلود PDF سفر
      </Button>
    </div>
  );
};
