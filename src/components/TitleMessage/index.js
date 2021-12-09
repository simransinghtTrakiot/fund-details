import "./style.css";
import readmore from "../../assets/images/readmore.png";
function TitleMessage() {
  return (
    <div className="title-message-block">
      <div className="title-message-heading">About Manager</div>
      <div className="title-message-text">
        Ipsum quis eu deserunt veniam incididunt ea excepteur laborum id ex ad
        anim incididunt dolor. Occaecat ea occaecat elit do laborum nulla
        aliquip ut nostrud reprehenderit do deserunt mollit consequat. Cupidatat
        culpa id ex cillum sunt dolor velit consequat eu quis laborum mollit
        magna ex.
      </div>
      <div className="title-message-read-more">
        <a href="#">Read More</a>
        <img src={readmore} />
      </div>
    </div>
  );
}

export default TitleMessage;
