import { run, css } from "uebersicht";
import Spaces from "./components/spaces.jsx";
import Clock from "./components/clock.jsx";

const container = css({
  backgroundColor: "rgb(35,37,47)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  overflow: "hidden",
  justifyContent: "space-between",
  padding: 3,
  fontFamily: "Fira Code"
});

export const command = `
SPACES=$(./top-status-bar/scripts/spaces.sh);

echo $(cat <<-EOF
  { "spaces": $SPACES } 
EOF);
`;

const result = (data, key) => {
  try {
    return JSON.parse(data)[key];
  } catch (e) {
    return "";
  }
};

export const render = ({ output, error }) => {
  if (error) {
    return (
      <div className={container}>
        <p>error</p>
      </div>
    );
  }

  return (
    <div className={container}>
      <Spaces spaces={result(output, "spaces")} />
      <Clock />
    </div>
  );
};

export const refreshFrequency = 50;

export default null;
