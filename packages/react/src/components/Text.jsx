import React from "react";
import classNames from "classnames";

import { useColorContext } from "../providers/ColorProvider";

const Text = ({ color, isHighlighted, text }) => (
  <span className={classNames({ highlight: isHighlighted })} style={{ color }}>
    {text}
  </span>
);

const HistoryText = () => {
  let seperator = "";

  const { history, activeColor } = useColorContext();

  return (
    <div className="text">
      {history.map((color) => {
        const isHighlighted = color === activeColor;

        const component = (
          <React.Fragment key={color}>
            {seperator}
            <Text isHighlighted={isHighlighted} color={color} text={color} />
          </React.Fragment>
        );

        seperator = ", ";

        return component;
      })}
    </div>
  );
};

export default HistoryText;
