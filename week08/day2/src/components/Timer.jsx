import { useEffect } from "react";
function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => {
      console.log("Cleanup");
      clearInterval(id);
    };
  });
  return <p>Timer running. Check the console</p>;
}

export default Timer;
