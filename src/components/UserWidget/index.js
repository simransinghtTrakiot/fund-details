import user from "../../assets/images/user.png";
import social1 from "../../assets/images/social1.png";
import social2 from "../../assets/images/social2.png";
import social3 from "../../assets/images/social3.png";
import "./style.css";
function UserWidget() {
  return (
    <div className="user-widget">
      <div className="user-image-name">
        <div>
          <img src={user} style={{ maxHeight: 60 }} />
        </div>
        <div className="pl-1">
          <div className="user-name">Lisa Deo</div>
          <div className="user-subtitle">Last Seen 2:30 Am</div>
        </div>
      </div>
      <div className="user-social">
        <div className="user-social-icon">
          <img src={social1} />
        </div>
        <div className="user-social-icon">
          <img src={social2} />
        </div>
        <div className="user-social-icon">
          <img src={social3} />
        </div>
      </div>
    </div>
  );
}

export default UserWidget;
