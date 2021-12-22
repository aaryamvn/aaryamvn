import React from "react";

export const Colorbar: React.FC<{ height: string }> = ({ height }) => {
  return (
    <div
      className={`w-screen ${height}`}
      style={{
        background:
          "linear-gradient(90deg, #FC62D0 0%, #555CFF 52.23%, #FF635A 98.59%)",
      }}
    ></div>
  );
};
