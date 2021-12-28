import React from "react";

const useToggle = () => {
  const [isToggled, setToggle] = React.useState<boolean>(true);

   const toggle = ()  => setToggle(isToggled => !isToggled);

  return [isToggled, toggle] as const;
};

export default useToggle;
