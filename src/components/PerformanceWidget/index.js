import warning from "../../assets/images/warning.png";

function PerformanceWidget({ heading, subtitle, isWarning }) {
  return (
    <div className="performance-widget">
      <span className="performance-heading">{heading}</span>
      <div className="performance-value">
        <span>{subtitle}</span>
        {isWarning && <img src={warning} />}
      </div>
    </div>
  );
}

export default PerformanceWidget;
