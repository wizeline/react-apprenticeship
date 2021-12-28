import React from "react";
import TypeList from "../types/PatternListType";
const Header: React.FC<{
  setPattern: (pattern: TypeList) => void;
  patternList: TypeList[];
}> = ({ setPattern, patternList }) => {
  return (
    <header>
      <ul className="nav">
        {patternList.map((pattern) => (
          <li
            key={pattern}
            onClick={() => {
              setPattern(pattern);
            }}
          >
            {pattern}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
