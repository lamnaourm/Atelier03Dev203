import "./App.css";
import Livre from "./components/Livre";

const livres = [
  {
    id:1,
    titre: "Reminders of Him: A Novel",
    prix: 90.97,
    url: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:2,
    titre: "Ugly Love: A Novel",
    prix: 102.5,
    url: "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:3,
    titre: "Where the Crawdads Sing",
    prix: 78.96,
    url: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:4,
    titre: "November 9: A Novel",
    prix: 123.55,
    url: "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:5,
    titre: "The Return of the Gods",
    prix: 27.9,
    url: "https://images-na.ssl-images-amazon.com/images/I/61uiYWcEQGL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:6,
    titre: "I Love You to the Moon and Back",
    prix: 55.85,
    url: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
  },
  {
    id:7, 
    titre: "All Good People Here: A Novel",
    prix: 90.34,
    url: "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:8,
    titre: "The Great Reset: And the War for the World",
    prix: 100.4,
    url: "https://images-na.ssl-images-amazon.com/images/I/61clZgj1xZL._AC_UL210_SR195,210_.jpg",
  },
  {
    id:9,
    titre: "Good Inside: A Guide to Becoming the Parent You Want to Be",
    prix: 106.5,
    url: "https://images-na.ssl-images-amazon.com/images/I/71RIWM0sv6L._AC_UL210_SR195,210_.jpg",
  },
  {
    id:10,
    titre: "The Butcher and The Wren: A Novel",
    prix: 34.78,
    url: "https://images-na.ssl-images-amazon.com/images/I/81ZjXQY0+sL._AC_UL210_SR195,210_.jpg",
  },
];

function App() {
  return (
    <div className="container">
      {livres.map(item => <Livre url={item.url} titre={item.titre} prix={item.prix}/>)}
    </div>
  );
}

export default App;
