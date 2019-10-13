import Magazine from "./Magazine";
import Tour from "./Tour";
import Service from "./Service";
import Azadi from "./Azadi";
import Eiffel from "./Eiffel";
import Trees from "./Trees";
import Nineteen from "./Nineteen";
import Company from "./Company";
import Vip from "./Vip";
import One from "./One";

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
    case "TREES":
      return <Trees className={props.className} style={props.style} />;
      case "ONE":
        return <One className={props.className} style={props.style} />;
    case "NINETEEN":
      return <Nineteen className={props.className} style={props.style} />;
    case "COMPANY":
      return <Company className={props.className} style={props.style} />;
    case "VIP":
      return <Vip className={props.className} style={props.style} />;
    default:
      return "";
  }
};

export default Icon;
