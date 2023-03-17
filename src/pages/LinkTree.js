import Footer from "../components/Footer";

export default function LinkTreePage() {
  return (
    <>
      <header>
        <h1>LinkTreePage</h1>
        <a href={"/"}>&larr; Home</a>
      </header>
      <main>
        <a href="/">Website Homepage</a>
        <a href="/portfolio">Portfolio</a>
        <a href="htts://www.instagram.com/7smiles.art">
          Instagram (7smilesArt)(*)
        </a>
        <a href="www.instagram.com/EyJoJordan">Instagram (private)(*)</a>
        <a href="https://www.etsy.com/">Shop (*)</a>
        <a href="https://www.instagram.com/EyJoJordan">OnlyFans</a>
      </main>
      <Footer />
    </>
  );
}
