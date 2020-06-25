import { css, element } from "uebersicht";

const spaceContainer = css({
  display: "flex",
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
});

const underline = css({
  width: "100%",
  height: 1,
  backgroundColor: "white"
});

const text = css({
  fontSize: 13,
  color: "white",
  padding: 0,
  margin: 0
});

const active = css({
  fontSize: 13,
  fontWeight: "500",
  color: "#72ee7a",
  padding: 0,
  margin: 0
});

const container = css({
  display: "flex",
  flexDirection: "row"
});

const background = css({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "orange",
  zIndex: -1
});

const render = ({ error, spaces = [] }) => {
  if (error) return <p>some error...</p>;
  if (!spaces || spaces.length === 0) return null;

  return (
    <div className={container}>
      {spaces.map(space => (
        <div className={spaceContainer}>
          <img
            src={`/Applications/${space.windowInfo.app}.app/Contents/Resources/Icon.icns`}
            className={background}
          />
          <div className={space.display === 1 ? null : underline} />
          <p className={space.focused ? active : text}>{space.index}</p>
        </div>
      ))}
    </div>
  );
};

export default render;
