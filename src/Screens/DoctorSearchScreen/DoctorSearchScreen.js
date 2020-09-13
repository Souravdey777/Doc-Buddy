import React from "react";
import Styles from "./ProfileScreen.module.css";
function ProfileScreen() {
  return (
    <div className={Styles.ProfileRoot}>
      <div className={Styles.ProfileCard}>
        <div className={Styles.UserPic}>
          <img
            className={Styles.Circle}
            src="https://lh3.googleusercontent.com/ogw/ADGmqu-EXpjNwCDmDxWNivsZieGnklYUfAi2fTYFyDF4=s83-c-mo"
            alt="User Pic"
          ></img>
        </div>
        <div className={Styles.UserName}>Sourav Dey</div>
      </div>
      <div className={Styles.BMICard}>
        <div>85 kg</div>
        <div className={Styles.MidLine}></div>
        <div>186 cm</div>
      </div>
      <div className={Styles.Graph}></div>
      <div className={Styles.Headings}>Last Visits</div>
      <div className={Styles.PreviousVisits}>
        <img
          className={Styles.ProfileCircle}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-EXpjNwCDmDxWNivsZieGnklYUfAi2fTYFyDF4=s83-c-mo"
          alt="User Pic"
        ></img>

        <img
          className={Styles.ProfileCircle}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-EXpjNwCDmDxWNivsZieGnklYUfAi2fTYFyDF4=s83-c-mo"
          alt="User Pic"
        ></img>
        <img
          className={Styles.ProfileCircle}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-EXpjNwCDmDxWNivsZieGnklYUfAi2fTYFyDF4=s83-c-mo"
          alt="User Pic"
        ></img>

        <img
          className={Styles.ProfileCircle}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-EXpjNwCDmDxWNivsZieGnklYUfAi2fTYFyDF4=s83-c-mo"
          alt="User Pic"
        ></img>
      </div>
    </div>
  );
}

export default ProfileScreen;
