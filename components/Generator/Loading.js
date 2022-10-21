import { useEffect } from "react";

const Loading = ({ changeStatus }) => {
  useEffect(() => {
    setTimeout(() => {
      changeStatus(2);
    }, 1000);
  }, []);

  return (
    <div className="mx-auto flex items-center justify-center pt-80 pb-96 px-10">
      <div className="flex flex-row space-x-3">
        <div className="w-3.5 h-3.5 bg-black animate-pulse " />
        <div className="w-3.5 h-3.5 bg-black animate-pulse" />
        <div className="w-3.5 h-3.5 bg-black animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;