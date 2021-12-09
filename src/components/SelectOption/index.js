import selectdown from "../../assets/images/selectdown.png";
import "./style.css";
function SelectOption() {
  return (
    <div>
      <div className="select-option-label">Select Time Period</div>
      <div className="select-option-container">
        <div>3Q2021</div>
        <div>
          <img src={selectdown} />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
