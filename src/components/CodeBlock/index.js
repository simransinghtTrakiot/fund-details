import copyicon from "../../assets/images/copyicon.png";
import "./style.css";
function CodeBlock() {
  return (
    <div className="code-block">
      <div className="code-block-title">Fund Address</div>
      <div className="code-block-text">xAffsX22323....44dddd</div>
      <div className="copy-icon">
        <img src={copyicon} />
      </div>
    </div>
  );
}

export default CodeBlock;
