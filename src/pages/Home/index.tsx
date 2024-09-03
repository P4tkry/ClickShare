import { Button } from "antd";
import LastQRS from "./LastQRS";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={"flex flex-col items-center gap-5"}>
      <h1 className={"text-center text-6xl"}>
        <span className={"text-csBlue"}>Click</span>Share
      </h1>
      <p className={"text-center max-w-[500px]"}>
        CliskShare to aplikacja do tworzenia wizytówek w formie QR kodu.
        Wystarczy, że stworzysz wizytówkę, a następnie dasz ją zeskanować
        osobie, której chcesz udostępnić swoje dane kontaktowe.
      </p>
      <div className={"flex gap-4 w-full justify-center"}>
        <Link to={"/create"}>
          <Button type="primary">Stwórz wizytówkę</Button>
        </Link>
        <Link to={"/scan"}>
          <Button type="default">Zeskanuj wizytówkę</Button>
        </Link>
      </div>
      <LastQRS />
    </div>
  );
}
