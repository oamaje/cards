import "./styles.css";
import Cards from "./comp/cards";

export default function App() {
  return (
    <div className="App">
      <Cards
        title="Total Sales"
        winnings="9850.90"
        number="1.8"
        class="green"
        arrow="↑"
      />
      <Cards
        title="Net Revenue"
        winnings="7520.50"
        number="2.5"
        class="green"
        arrow="↑"
      />
      <Cards
        title="Customers"
        winnings="1375"
        number="5.2"
        class="red"
        arrow="↓"
      />
      <Cards
        title="MRR"
        winnings="250.00"
        number="2.2"
        class="green"
        arrow="↑"
      />
    </div>
  );
}
