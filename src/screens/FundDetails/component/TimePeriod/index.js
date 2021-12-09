import SelectOption from "../../../../components/SelectOption";
import TimeWidget from "../../../../components/TimeWidget";
import section1 from "../../../../assets/images/section1.png";
import section2 from "../../../../assets/images/section2.png";
import section3 from "../../../../assets/images/section3.png";
import section4 from "../../../../assets/images/section4.png";
import section5 from "../../../../assets/images/section5.png";
import section6 from "../../../../assets/images/section6.png";
function TimePeriod() {
  return (
    <div>
      <div>
        <SelectOption />
        <div className="row">
          <div className="col">
            <div>
              <TimeWidget
                image={section1}
                value="5200"
                title="Total"
                bp="90% 20%"
                position={"left"}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <TimeWidget
                image={section2}
                value="5200"
                title="Returns"
                bp="90% 100%"
                position={"right"}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <TimeWidget
                image={section3}
                value="5200"
                title="Max Drawdowns"
                bp="90% 20%"
                position={"left"}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <TimeWidget
                image={section4}
                value="5200"
                title="Sharp"
                bp="90% 80%"
                position={"right"}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <TimeWidget
                image={section5}
                value="5200"
                title="Sortino"
                bp="90% 20%"
                position={"left"}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <TimeWidget
                image={section6}
                value="5200"
                title="Sharp"
                bp="90% 30%"
                position={"right"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePeriod;
