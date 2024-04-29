import topbar from "./images/USPS.png";
import frame1 from "./images/frame1.png";
import lowbar from "./images/lowbar.png";
import mainmobile from "./images/mainMobile.png";


function AppMobile(){
    return(
        <div className="AppMobile">
          <header className="App-header">
            <div className="image-container-top">
              <img src={topbar} className="top-bar" alt="Top Bar" />
              <img src={frame1} className="frame1" alt="Frame 1" />
            </div>

            <div className="image-andorid-main">
              <img src={mainmobile} className="mainmobile" alt="mainmobile" />
            </div>

    
           
            <img src={lowbar} className="lowbar" alt="lowbar" />
          </header>
        </div>
      );
    }
    
    export default AppMobile;
