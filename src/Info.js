import React from "react";
import { MyContext } from "./App.js";

class Info extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>

            {context.state.currentCompany ? (
              <div className="quote-info">
              <h2 className="quote-ticker">
                {context.state.currentQuote.symbol}
              </h2>
                <a
                  href={context.state.currentCompany.website}
                >
                  <h3 className="quote-name">
                    {context.state.currentQuote.companyName}
                  </h3>
                </a>
                <h3 className="quote-price">
                  ${context.state.currentQuote.latestPrice
                    ? context.state.currentQuote.latestPrice.toFixed(2)
                    : null}
                </h3>
                <h4
                  className={
                    context.state.currentQuote.changePercent >= 0
                      ? "quote-dodchg green-text"
                      : "quote-dodchg red-text"
                  }
                >
                  {(context.state.currentQuote.changePercent * 100).toFixed(2)}%
                </h4>

                <p className="quote-latest">
                  As of the{" "}
                  {context.state.currentQuote.latestTime} {context.state.currentQuote.latestSource}
                </p>

                <p className="quote-exchange">
                  {context.state.currentCompany.exchange}
                </p>
                <p className="quote-sector">
                  Sector:{" "}
                  {context.state.currentCompany
                    ? context.state.currentCompany.sector
                    : null}
                </p>
                <p className="quote-mrkcap">
                  Market Cap: ${(
                    context.state.currentQuote.marketCap / 1000000000
                  ).toFixed(2)}B
                </p>

                <p className="quote-mrkcap">
                  52 Week High: ${(
                    context.state.currentQuote.week52High
                  ).toFixed(2)}
                </p>

                <p className="quote-mrkcap">
                  52 Week Low: ${(
                    context.state.currentQuote.week52Low
                  ).toFixed(2)}
                </p>

              </div>
            ) : null}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Info;