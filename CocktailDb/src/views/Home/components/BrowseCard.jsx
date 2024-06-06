import { Link } from "react-router-dom";

const BrowseCard = () => {
  const AlphabetArray = [
    "A / ",
    "B / ",
    "C / ",
    "D / ",
    "E / ",
    "F / ",
    "G / ",
    "H / ",
    "I / ",
    "J / ",
    "K / ",
    "L / ",
    "M / ",
    "N / ",
    "O / ",
    "P / ",
    "Q / ",
    "R / ",
    "S / ",
    "T / ",
    "U / ",
    "V / ",
    "W / ",
    "X / ",
    "Y / ",
    "Z ",
  ];
  return (
    <center>
      <h3>Browse By Starting Alphabet</h3>

      {AlphabetArray.map((char) => (
        <span>
          <Link to={`/browse/${char[0]}`} state={{ char }}>
            {char}
          </Link>
        </span>
      ))}
    </center>
  );
};

export default BrowseCard;
