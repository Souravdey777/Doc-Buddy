import React from "react";
import Styles from "./ReminderScreen.module.css";
import axios from "axios";
const fileUpload = require("fuctbase64");

class ReminderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
  // const [result, setResult] = useState([]);
  handleChamge = (event) => {
    fileUpload(event).then((data) => {
      // console.log("base64 :", data.base64);
      axios
        .post(
          "https://us-central1-doc-buddy.cloudfunctions.net/app/TextExtraction",
          {
            imageString: data.base64,
          }
        )
        .then((response) => {
          console.log(response.data.result);
          this.setState({ result: response.data.result });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  render() {
    return (
      <div className={Styles.ReminderScreenRoot}>
        <hr />
        <div className={Styles.Headings}>Med Reminder</div>
        <p style={{ padding: "5px" }}>
          This is a very basic prototype of the Medicine Reminder. Please upload
          a croped Image of a medical bill. It will detect the medicine list and
          then you can edit and customize the alarm
        </p>
        <input
          type="file"
          className="input-upload"
          name="myfile"
          accept="image/*"
          onChange={this.handleChamge}
        />
        {this.state.result.map((meds, key) => {
          return (
            <>
              <input
                type="text"
                className={Styles.inputText}
                key={key}
                value={meds}
                onChange={(event) => {
                  var result = this.state.result;
                  result[key] = event.target.value;
                  this.setState({ result: result }, () => {
                    console.log(this.state.result);
                  });
                }}
              />
              <div>
                <div>Set Time</div>
                <div>6:00pm</div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default ReminderScreen;
