import Manager from "./component/Manager";
import TimePeriod from "./component/TimePeriod";
import "./style.css";

function FundDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="color-border">
            <Manager />
          </div>
        </div>
        <div className="col-4">
          <div className="color-border">
            <TimePeriod />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundDetails;
