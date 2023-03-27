import React from "react";
export const Button = () => {
  const [color, setColor] = React.useState("red");
  const [check, setCheck] = React.useState(false);
  const newColor = color === "red" ? "blue " : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
        disabled={check}
      >
        {`change to ${newColor}`}
      </button>
      <input
        type="checkbox"
        id="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label htmlFor="checkbox">{`${
        check ? "enable" : "disable"
      } button`}</label>
    </div>
  );
};
