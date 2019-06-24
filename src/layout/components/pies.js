import React from "react";
import PieChart from "react-minimal-pie-chart";
import "assets/stylesheets/pies.scss";

function Pies(props) {
  const pierender = props.inview ? 100 : 0;

  return (
    <>
      <h2>Skillset</h2>
      <div className="chart tea">
        <PieChart
          data={[
            {
              value: 100,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
          rounded
          animate
          reveal={pierender}
        />
        <h3>Tea Drinking</h3>
      </div>
      {/* Tea Chart */}
      <div className="chart html">
        <PieChart
          data={[
            {
              value: 80,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
          rounded
          animate
          reveal={pierender}
        />
        <h3>HTML</h3>
      </div>
      {/* HTML Chart */}
      <div className="chart css">
        <PieChart
          data={[
            {
              value: 80,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
          rounded
          animate
          reveal={pierender}
        />
        <h3>CSS</h3>
      </div>
      {/* CSS Chart */}
      <div className="chart js">
        <PieChart
          data={[
            {
              value: 75,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
          rounded
          animate
          reveal={pierender}
        />
        <h3>JS</h3>
      </div>
      {/* JS Chart */}
      <div className="chart php">
        <PieChart
          data={[
            {
              value: 65,
              color: "#E38627"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "sans-serif"
          }}
          labelPosition={0}
          rounded
          animate
          reveal={pierender}
        />
        <h3>PHP</h3>
      </div>
      {/* PHP Chart */}
    </>
  );
}

export default Pies;
