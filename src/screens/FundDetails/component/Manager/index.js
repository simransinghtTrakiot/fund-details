import Title from "../../../../components/Title";
import UserWidget from "../../../../components/UserWidget";
import CodeBlock from "../../../../components/CodeBlock";
import TextBlock from "../../../../components/TextBlock";
import TitleMessage from "../../../../components/TitleMessage";
import Performance from "../../../../components/Performance";
function Manager() {
  return (
    <div>
      <Title title="Manager" />
      <div className="row">
        <div className="col-5">
          <UserWidget />
          <CodeBlock />
          <TextBlock />
        </div>
        <div className="col-7">
          <Performance />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TitleMessage />
        </div>
      </div>
    </div>
  );
}

export default Manager;
