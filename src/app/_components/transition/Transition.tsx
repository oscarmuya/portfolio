import "./transition.css";

type Props = {
  color: string;
  transitionType: string;
};

function Transition({ color, transitionType }: Props) {
  return (
    <div className={`transition ${transitionType}`}>
      <div className={`transition__ball ${color}`}></div>
    </div>
  );
}

export default Transition;
