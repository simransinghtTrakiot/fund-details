import "./style.css";
function TimeWidget({ image, value, title, bp, position }) {
  return (
    <div
      className={"time-widget-container"}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: bp,
      }}
    >
      <div className="time-widget-value">{value}</div>
      <div className="time-widget-title">{title}</div>
    </div>
  );
}

export default TimeWidget;
