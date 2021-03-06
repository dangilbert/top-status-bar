import { css, element } from "uebersicht";

const container = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgb(35,37,47)",
  borderRadius: 5,
  paddingRight: 20,
  paddingLeft: 20
});

const timeText = css({
  color: "white",
  padding: 0,
  fontSize: 13,
  margin: 0
});

const dateText = css({
  color: "white",
  padding: 0,
  paddingLeft: 5,
  fontSize: 13,
  margin: 0
});

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const render = ({ error }) => {
  if (error) return <p>some error...</p>;

  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes().toString();

  return (
    <div className={container}>
      <p className={timeText}>{`${now.getHours()}:${pad(now.getMinutes(), 2)} `}</p>
      <p className={dateText}>
        {` (${now.getDate()}. ${MONTHS[now.getMonth()]})`}
      </p>
    </div>
  );
};

export default render;
