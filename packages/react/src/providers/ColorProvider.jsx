import { useContext, useMemo, useReducer, createContext } from "react";

const colors = ["Red", "Blue", "Green", "Black", "Orange"];
const initialIndex = 0;

const historySet = new Set();
historySet.add(initialIndex);

const initialState = { activeIndex: initialIndex, history: [initialIndex] };
const reducer = (state, next) => ({ ...state, ...next });

const ColorContext = createContext({
  ...initialState,
  colors,
  onClick: () => void 0,
});

export const Provider = ({ children }) => {
  const [{ activeIndex, history }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const color = useMemo(() => colors[activeIndex], [activeIndex]);

  const onClick = () => {
    const nextIndex =
      activeIndex === 1 ? 2 : Math.floor(Math.random() * colors.length);
    historySet.add(nextIndex);

    dispatch({ activeIndex: nextIndex, history: [...historySet] });
  };

  return (
    <ColorContext.Provider
      value={{ activeIndex, history, onClick, color, colors }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
