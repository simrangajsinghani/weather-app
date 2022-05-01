import "./App.css";
import data from "./data";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function App() {
  const Cards = data.map((item, index) => {
    const imgUrl = item.weather[0].icon;

    return (
      <>
        <div className="card">
          <Card
            style={{
              margin: "10px 12px",
              border: "1px solid #000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{item.name}</h3>
            <CardContent>
              <div key={item.index} />
              <Typography
                style={{ fontSize: 14 }}
                color="textPrimary"
                gutterBottom
              >
                <div>{item.main.temp_min + "°"}</div>
                <div>{item.main.temp_max + "°"}</div>
              </Typography>
              <Typography variant="h6">
                <div>{item.weather[0].description}</div>
              </Typography>
              <Typography style={{ maxHeight: "150px" }} color="textSecondary">
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${imgUrl}@4x.png`}
                  />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </>
    );
  });

  return (
    <div className="App">
      <h1>Weather App</h1>
      {Cards}
    </div>
  );
}

export default App;
