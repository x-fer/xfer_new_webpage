export default function Footer() {
  return (
    <footer className="bg-gray-800 p-8">
      <div className="flex justify-between">
        {" "}
        <div className="flex-1 pr-2">
          {" "}
          <h3 style={{whiteSpace: "pre-line"}} className="text-gray-300 font-bold mb-2">Informatički klub studenata
             Fakulteta elektrotehnike i računarstva</h3>{" "}
          <ul>
            <li className="mb-1">
              <a href="https://www.linkedin.com/company/xferhr" className="text-gray-300 hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="mb-1">
              <a href="https://www.instagram.com/xfer_hr/" className="text-gray-300 hover:underline">
                Instagram
              </a>
            </li>
            <li className="mb-1">
              <a href="https://web.facebook.com/xferhr?_rdc=1&_rdr" className="text-gray-300 hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 pl-0">
          {" "}
          <h3 className="text-gray-300 font-bold mb-2">Kontakt</h3>{" "}
          <ul>
            <li className="mb-1">
              <a href="mailto: hello@xfer.hr" className="text-gray-300 hover:underline">
                E-mail
              </a>
            </li>
            <li className="mb-1">
              <a href="https://discord.gg/v2sR6yBJsC" className="text-gray-300 hover:underline">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
