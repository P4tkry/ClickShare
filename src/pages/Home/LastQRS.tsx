import { useEffect, useState } from "react";

export default function LastQRS() {
  const [lastQrs, setLastQrs] = useState<string[]>([]);

  useEffect(() => {
    localStorage.getItem("lastQrs") &&
      setLastQrs(JSON.parse(localStorage.getItem("lastQrs")!));
  }, []);

  return (
    <div className={"bg-gray-300 rounded-lg px-4 py-2 text-center"}>
      <h3 className={"text-lg"}>Ostatnio zeskanowane wizytówki</h3>
      {lastQrs.length <= 0 ? (
        <p className={"text-sm text-gray-700"}>
          Nie masz jeszcze zeskanowanych wizytówek
        </p>
      ) : null}
    </div>
  );
}
