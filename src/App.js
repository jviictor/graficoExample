import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1",
          "#ecf0f1",
          "#50af95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor:"black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ width: 400, 
      position:"absolute",
      bottom:0,
      right:0,
      left:0,
      top:100,
      margin:"auto"
      }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
