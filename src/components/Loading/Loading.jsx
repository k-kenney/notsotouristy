import React from "react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30">
      <img src="/loading.gif" alt="loading gif" />
    </div>
  );
};
