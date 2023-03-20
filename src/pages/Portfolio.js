import Footer from "../components/Footer";
import data from "../lib/portfolio.json";

export default function PortfolioPage() {
  return (
    <>
      <header>
        <h1>PortfolioPage</h1>
        <a href={"/"}>&larr; Home</a>
      </header>
      <main>
        {data.map((series) => {
          return (
            <div key={series.id} className={"seriesWrapper"}>
              <h2>{series.seriesName}</h2>
              <p>{`Release: ${series.release}`}</p>
              <div className={"seriesGroup"}>
                {series.images.map((img) => {
                  return (
                    <img
                      key={img.seriesnumber}
                      className={"seriesImg"}
                      src={img.image}
                      alt={`${series.seriesNameName}_${img.seriesnumber}`}
                    />
                  );
                })}
              </div>
              <hr />
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
