export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2023{" "}
        <a href={"https://github.com/Long-HaHoang"}>
          long ha hoang <sup>(*)</sup>
        </a>
      </p>
      <div>
        <a href={"/"}>Home</a>
        <a href={"/imprint"}>Imprint (Impressum)</a>
        <a href={"/dataprivacy"}>Data Privacy (Datenschutz)</a>
      </div>
      <p>(*): External link</p>
    </footer>
  );
}
