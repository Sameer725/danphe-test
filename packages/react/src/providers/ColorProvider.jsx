import { useContext, useMemo, useReducer, createContext } from "react";

const colors = ["Red", "Blue", "Green", "Black", "Orange"];
const initialColor = colors[0];

const historySet = new Set();
historySet.add(initialColor);

const initialState = { activeColor: initialColor, history: [initialColor] };
const reducer = (state, next) => ({ ...state, ...next });

const ColorContext = createContext({
  ...initialState,
  onClick: () => void 0,
});

export const Provider = ({ children }) => {
  const [{ activeColor, history }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const onClick = () => {
    const nextIndex =
      activeColor === colors[1] ? 2 : Math.floor(Math.random() * colors.length);

    const nextColor = colors[nextIndex];

    historySet.add(nextColor);

    dispatch({ activeColor: nextColor, history: [...historySet] });
  };

  return (
    <ColorContext.Provider value={{ activeColor, history, onClick }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
