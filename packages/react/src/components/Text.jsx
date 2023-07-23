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

  const { history, activeIndex, colors } = useColorContext();

  return (
    <div className="text">
      {history.map((colorIndex) => {
        const isHighlighted =
          colors.length === history.length && colorIndex === activeIndex;
        const color = colors[colorIndex];
        const component = (
          <>
            {seperator}
            <Text
              isHighlighted={isHighlighted}
              key={colorIndex}
              color={color}
              text={color}
            />
          </>
        );

        seperator = ", ";

        return component;
      })}
    </div>
  );
};

export default HistoryText;
