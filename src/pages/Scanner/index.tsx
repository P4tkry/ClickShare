import { useState } from "react";
import { Scanner as QRScanner } from "@yudiel/react-qr-scanner";
import VCard from "../../utils/VCard";
import { Button } from "antd";
import { FaDownload } from "react-icons/fa";
import {
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGlobe,
  FaStickyNote,
} from "react-icons/fa";

function ContactInfo(props: {
  label: string;
  value: string | undefined;
  linkable?: string | boolean;
  className?: string;
  icon: React.ReactNode;
}) {
  if (props.value)
    return (
      <div className={`flex gap-2 items-center ${props.className}`}>
        {props.icon}
        <div>
          <strong>{props.label}:</strong>{" "}
          {props.linkable ? (
            <a
              href={`${props.linkable === true ? "" : props.linkable}${props.value}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.value}
            </a>
          ) : (
            props.value
          )}
        </div>
      </div>
    );
  return null;
}

export default function Scanner() {
  const [data, setData] = useState<
    | { success: false; type: "qr" | "access" }
    | { success: true; content: VCard }
    | undefined
  >();

  return (
    <div className={"text-center space-y-4"}>
      <h2 className={"text-3xl"}>Zeskanuj kod QR</h2>
      <p>
        Zeskanuj kod QR, aby odczytać dane kontaktowe z wizytówki innej osoby.
      </p>

      {data === undefined ? (
        <QRScanner
          onError={() => {
            setData({ success: false, type: "access" });
          }}
          onScan={(result) => {
            try {
              const vCard = VCard.fromString(result[0].rawValue);
              setData({ success: true, content: vCard });
            } catch (e) {
              setData({ success: false, type: "qr" });
            }
          }}
          styles={{ finderBorder: 0 }}
        />
      ) : data.success ? (
        <div className={"bg-gray-300 rounded-lg px-4 py-4"}>
          <h3 className={"text-2xl mb-2"}>Dane kontaktowe</h3>
          <p className={"text-left"}>
            <ContactInfo
              label={"Firma"}
              value={data.content.organization}
              icon={<FaBuilding />}
            />
            <ContactInfo
              label={"Imię"}
              value={data.content.fullName}
              icon={<FaUser />}
            />
            <ContactInfo
              label={"Email"}
              value={data.content.email}
              icon={<FaEnvelope />}
            />
            <ContactInfo
              label={"Telefon"}
              value={data.content.phoneNumber}
              icon={<FaPhone />}
              linkable={"tel:"}
            />
            <ContactInfo
              label={"Adres"}
              value={data.content.address}
              icon={<FaMapMarkerAlt />}
            />
            <ContactInfo
              label={"Title"}
              value={data.content.title}
              icon={<FaBriefcase />}
            />
            <ContactInfo
              label={"URL"}
              value={data.content.url}
              icon={<FaGlobe />}
              linkable={true}
            />
            <ContactInfo
              label={"Note"}
              value={data.content.note}
              icon={<FaStickyNote />}
            />
            <Button
              type={"primary"}
              icon={<FaDownload />}
              onClick={() =>
                data.content.download(
                  `${data.content.name ? data.content.name.replaceAll(" ", "-") : "contact"}.vcf`,
                )
              }
            >
              Zapisz kontakt
            </Button>
          </p>
        </div>
      ) : data.type === "qr" ? (
        <p className={"text-red-500"}>
          Nie udało się odczytać kodu QR. Spróbuj ponownie.
        </p>
      ) : (
        <p className={"text-red-500"}>
          Aplikacja nie ma dostępu do kamery. Sprawdź ustawienia aplikacji.
        </p>
      )}
    </div>
  );
}
