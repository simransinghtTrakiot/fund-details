import "./style.css";
import PerformanceWidget from "../PerformanceWidget";
function Performance() {
  return (
    <div className="performance-box">
      <div className="row">
        <div className="col-performance">
          <PerformanceWidget heading="23" subtitle="Rank" isWarning={false} />
          <div className="borderBottom"></div>
          <div className="borderRight"></div>
        </div>
        <div className="col-performance">
          <PerformanceWidget
            heading="2%"
            subtitle="Management Fee"
            isWarning={true}
          />
          <div className="borderBottom"></div>
          <div className="borderRight"></div>
        </div>
        <div className="col-performance">
          <PerformanceWidget
            heading="$1000"
            subtitle="Minimum Amt"
            isWarning={false}
          />
          <div className="borderBottom"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-performance">
          <PerformanceWidget
            heading="15%"
            subtitle="Performance Fee"
            isWarning={false}
          />
          <div className="borderRight"></div>
        </div>
        <div className="col-performance">
          <PerformanceWidget
            heading="18"
            subtitle="Number of active investors"
            isWarning={false}
          />
          <div className="borderRight"></div>
        </div>
        <div className="col-performance">
          <PerformanceWidget
            heading="75%"
            subtitle="Profitability"
            isWarning={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Performance;
