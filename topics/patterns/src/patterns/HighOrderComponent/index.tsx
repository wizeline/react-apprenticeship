
import Displayer from "./Displayer";
import withData from "./withData";
import withDummyText from "./withDummyText";

const HighOrderComponent = () => {
  const Display = withData(Displayer);
  const DummyText = withDummyText(Displayer);
  return (
    <div>
      <Display />
      <DummyText style={{margin : "10px", color : "purple"}} />
    </div>
  );
};
export default HighOrderComponent;
