function ColorPanel({ color }) {
  const panelStyle = {
    width: "300px",
    height: "200px",
    margin: "20px auto",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: color ? color.rgb : "white",
  };

  return <div style={panelStyle}></div>;
}

export default ColorPanel;