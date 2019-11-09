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
        src={props.map}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
      <a href={props.pdf} className="w-100">
        <Button className="form-control pdf-button" color="primary">
          دانلود PDF سفر
        </Button>
      </a>
    </div>
  );
};
