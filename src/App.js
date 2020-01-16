import React, { Component } from "react";
import "./App.css";
import Receipt from "./Receipt.js";

const receipt1 = {
  person: "Karolin",
  order: {
    main: "Burrito",
    protein: "Organic Tofu",
    rice: "Purple Rice",
    sauce: "Green Crack",
    toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
    drink: "Korchata",
    cost: 22
  },
  paid: false
};
const receipt2 = {
  person: "Jerrica",
  order: {
    main: "Rice Bowl",
    protein: "Ginger Soy Chix",
    rice: "Sticky Rice",
    sauce: "Korilla",
    toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
    drink: "Korchata",
    cost: 19
  },
  paid: false
};
const receipt3 = {
  person: "Matt",
  order: {
    main: "Salad Bowl",
    protein: "Organic Tofu",
    rice: "none",
    sauce: "K'lla",
    toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
    drink: "Sparkling Blood Orange Soda",
    cost: 20
  },
  paid: false
};
const receipts = [receipt1, receipt2, receipt3];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: receipts,
      searchString: ""
      // receipt1: receipt1,
      // receipt2: receipt2,
      // receipt3: receipt3
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
    this.handleSubmit();
  };

  handleSubmit = event => {
    this.setState({ receipts }, () =>
      this.setState({
        receipts: this.state.receipts.filter(receipt =>
          receipt.person
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())
        )
      })
    );
  };

  render() {
    return (
      <div>
        <h1 className="truck-name">Korilla</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="searchString"
            placeholder="search"
            value={this.state.searchString}
            onChange={this.handleChange}
          />
        </form>
        <div className="container">
          {/* {!this.state.receipt1.paid && (
            <Receipt receipt={this.state.receipt1} />
          )}
          {!this.state.receipt2.paid && (
            <Receipt receipt={this.state.receipt2} />
          )}
          {!this.state.receipt2.paid && (
            <Receipt receipt={this.state.receipt3} />
          )} */}
          {this.state.receipts
            .filter(receipt => !receipt.paid)
            .map(receipt => (
              <Receipt receipt={receipt} key={receipt.person} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
