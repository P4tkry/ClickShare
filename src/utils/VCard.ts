export default class VCard {
  public version: string;
  public fullName?: string; // FN
  public name?: string; // N
  public nickname?: string; // NICKNAME
  public photo?: string; // PHOTO
  public birthday?: string; // BDAY
  public anniversary?: string; // ANNIVERSARY
  public gender?: string; // GENDER
  public address?: string; // ADR
  public phoneNumber?: string; // TEL
  public email?: string; // EMAIL
  public mailer?: string; // MAILER
  public timezone?: string; // TZ
  public geolocation?: string; // GEO
  public title?: string; // TITLE
  public role?: string; // ROLE
  public logo?: string; // LOGO
  public organization?: string; // ORG
  public member?: string; // MEMBER
  public related?: string; // RELATED
  public categories?: string; // CATEGORIES
  public note?: string; // NOTE
  public prodid?: string; // PRODID
  public revision?: string; // REV
  public sortString?: string; // SORT-STRING
  public sound?: string; // SOUND
  public uid?: string; // UID
  public clientpidmap?: string; // CLIENTPIDMAP
  public url?: string; // URL
  public key?: string; // KEY
  public fburl?: string; // FBURL
  public caladruri?: string; // CALADRURI
  public caluri?: string; // CALURI
  public xml?: string; // XML

  constructor(version: string = "4.0") {
    this.version = version;
  }

  // Static method to parse a vCard string and return a VCard object
  static fromString(vcardString: string): VCard {
    if (
      !vcardString.startsWith("BEGIN:VCARD") ||
      !vcardString.endsWith("END:VCARD")
    ) {
      throw new Error(
        "Invalid vCard format: Missing BEGIN:VCARD or END:VCARD.",
      );
    }

    const lines = vcardString.split(/\r?\n/);
    const versionLine = lines.find((line) => line.startsWith("VERSION:"));
    if (!versionLine) {
      throw new Error("Invalid vCard format: Missing VERSION.");
    }

    const version = versionLine.split(":")[1];
    if (!version) {
      throw new Error("Invalid vCard format: VERSION is empty.");
    }

    const vcard = new VCard(version);

    lines.forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":");

      switch (key) {
        case "FN":
          vcard.fullName = value;
          break;
        case "N":
          vcard.name = value;
          break;
        case "NICKNAME":
          vcard.nickname = value;
          break;
        case "PHOTO":
          vcard.photo = value;
          break;
        case "BDAY":
          vcard.birthday = value;
          break;
        case "ANNIVERSARY":
          vcard.anniversary = value;
          break;
        case "GENDER":
          vcard.gender = value;
          break;
        case "ADR":
          vcard.address = value;
          break;
        case "TEL":
          vcard.phoneNumber = value;
          break;
        case "EMAIL":
          vcard.email = value;
          break;
        case "MAILER":
          vcard.mailer = value;
          break;
        case "TZ":
          vcard.timezone = value;
          break;
        case "GEO":
          vcard.geolocation = value;
          break;
        case "TITLE":
          vcard.title = value;
          break;
        case "ROLE":
          vcard.role = value;
          break;
        case "LOGO":
          vcard.logo = value;
          break;
        case "ORG":
          vcard.organization = value;
          break;
        case "MEMBER":
          vcard.member = value;
          break;
        case "RELATED":
          vcard.related = value;
          break;
        case "CATEGORIES":
          vcard.categories = value;
          break;
        case "NOTE":
          vcard.note = value;
          break;
        case "PRODID":
          vcard.prodid = value;
          break;
        case "REV":
          vcard.revision = value;
          break;
        case "SORT-STRING":
          vcard.sortString = value;
          break;
        case "SOUND":
          vcard.sound = value;
          break;
        case "UID":
          vcard.uid = value;
          break;
        case "CLIENTPIDMAP":
          vcard.clientpidmap = value;
          break;
        case "URL":
          vcard.url = value;
          break;
        case "KEY":
          vcard.key = value;
          break;
        case "FBURL":
          vcard.fburl = value;
          break;
        case "CALADRURI":
          vcard.caladruri = value;
          break;
        case "CALURI":
          vcard.caluri = value;
          break;
        case "XML":
          vcard.xml = value;
          break;
        default:
          break;
      }
    });

    if (!vcard.fullName && !vcard.name) {
      throw new Error("Invalid vCard format: Missing FN or N.");
    }

    if (!vcard.fullName && vcard.name) {
      const [lastName, firstName, middleName, prefix, suffix] =
        vcard.name.split(";");
      vcard.fullName = `${prefix ? prefix + " " : ""}${firstName ? firstName + " " : ""}${middleName ? middleName + " " : ""}${lastName ? lastName + " " : ""}${suffix ? suffix : ""}`;
    }

    if (!vcard.name && vcard.fullName) {
      const [prefix, firstName, middleName, lastName, suffix] =
        vcard.fullName.split(" ");
      vcard.name = `${lastName ? lastName + ";" : ""}${firstName ? firstName + ";" : ""}${middleName ? middleName + ";" : ""}${prefix ? prefix + ";" : ""}${suffix ? suffix : ""}`;
    }

    return vcard;
  }

  // Method to serialize the vCard to a string format
  toString(): string {
    let vcard = `BEGIN:VCARD\nVERSION:${this.version}\n`;

    if (this.fullName) vcard += `FN:${this.fullName}\n`;
    if (this.name) vcard += `N:${this.name}\n`;
    if (this.nickname) vcard += `NICKNAME:${this.nickname}\n`;
    if (this.photo) vcard += `PHOTO:${this.photo}\n`;
    if (this.birthday) vcard += `BDAY:${this.birthday}\n`;
    if (this.anniversary) vcard += `ANNIVERSARY:${this.anniversary}\n`;
    if (this.gender) vcard += `GENDER:${this.gender}\n`;
    if (this.address) vcard += `ADR:${this.address}\n`;
    if (this.phoneNumber) vcard += `TEL:${this.phoneNumber}\n`;
    if (this.email) vcard += `EMAIL:${this.email}\n`;
    if (this.mailer) vcard += `MAILER:${this.mailer}\n`;
    if (this.timezone) vcard += `TZ:${this.timezone}\n`;
    if (this.geolocation) vcard += `GEO:${this.geolocation}\n`;
    if (this.title) vcard += `TITLE:${this.title}\n`;
    if (this.role) vcard += `ROLE:${this.role}\n`;
    if (this.logo) vcard += `LOGO:${this.logo}\n`;
    if (this.organization) vcard += `ORG:${this.organization}\n`;
    if (this.member) vcard += `MEMBER:${this.member}\n`;
    if (this.related) vcard += `RELATED:${this.related}\n`;
    if (this.categories) vcard += `CATEGORIES:${this.categories}\n`;
    if (this.note) vcard += `NOTE:${this.note}\n`;
    if (this.prodid) vcard += `PRODID:${this.prodid}\n`;
    if (this.revision) vcard += `REV:${this.revision}\n`;
    if (this.sortString) vcard += `SORT-STRING:${this.sortString}\n`;
    if (this.sound) vcard += `SOUND:${this.sound}\n`;
    if (this.uid) vcard += `UID:${this.uid}\n`;
    if (this.clientpidmap) vcard += `CLIENTPIDMAP:${this.clientpidmap}\n`;
    if (this.url) vcard += `URL:${this.url}\n`;
    if (this.key) vcard += `KEY:${this.key}\n`;
    if (this.fburl) vcard += `FBURL:${this.fburl}\n`;
    if (this.caladruri) vcard += `CALADRURI:${this.caladruri}\n`;
    if (this.caluri) vcard += `CALURI:${this.caluri}\n`;
    if (this.xml) vcard += `XML:${this.xml}\n`;

    vcard += "END:VCARD";
    return vcard;
  }

  // Method to download the vCard as a .vcf file
  download(filename: string = "contact.vcf"): void {
    const vcardString = this.toString();
    const blob = new Blob([vcardString], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
