import Magazine from "./Magazine";
import Tour from "./Tour";
import Service from "./Service";
import Azadi from "./Azadi";
import Eiffel from "./Eiffel";

const Icon = props => {
  switch (props.icon) {
    case "SERVICE":
      return <Service className={props.className} style={props.style} />;
    case "TOUR":
      return <Tour className={props.className} style={props.style} />;
    case "MAGAZINE":
      return <Magazine className={props.className} style={props.style} />;
    case "AZADI":
      return <Azadi className={props.className} style={props.style} />;
    case "EIFFEL":
      return <Eiffel className={props.className} style={props.style} />;
    default:
      return "";
  }
};

export default Icon;
