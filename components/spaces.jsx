import { css, element } from "uebersicht";

const spaceContainer = css({
  marginLeft: 10
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

const active_display1 = css({
  fontSize: 13,
  fontWeight: "500",
  color: "#72ee7a",
  padding: 0,
  margin: 0
});

const active_display2 = css({
  fontSize: 13,
  fontWeight: "500",
  color: "#ff5555",
  padding: 0,
  margin: 0
});

const container = css({
  display: "flex",
  flexDirection: "row"
});

const render = ({ error, spaces = [] }) => {
  if (error) return <p>some error...</p>;
  if (!spaces || spaces.length === 0) return null;

  return (
    <div className={container}>
      {spaces.map(space => {
        var spaceTextClassName = space.visible && space.display === 1 ? active_display1
          : space.visible && space.display === 2 ? active_display2 
          : text;
          
        return (
        
        <div className={spaceContainer}>
          <p className={spaceTextClassName}>{space.index}</p>
          <div className={space.display === 1 ? null : underline} />
        </div>
      )})}
    </div>
  );
};

export default render;
