import React from 'react';
import logo from './logo.svg';
import './App.css';

import DownSvg from './components/svg/Down.jsx'
//import {GoogleApiWrapper} from 'google-maps-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/*


function WeatherApp() {

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default WeatherApp
 */

const style = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {

 constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
        <>

        <div className="content">

          <h1>Hello</h1>

            <div className=" css-2b097c-container">

                <div className=" css-yk16xz-control">

                    <div className=" css-1hwfws3">

                        <div className=" css-1uccc91-singleValue">Ocean</div>

                        <div className="css-1g6gooi">
                            <div className="" style={{display: "inline-block"}}>
                                <input className="inputas" autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-15-input" spellCheck="false" tabIndex="0" type="text" aria-autocomplete="list"/>
                                <div className="dork"></div>
                            </div>
                        </div>

                    </div>

                    <div className=" css-1wy0on6">

                        <span className=" css-1okebmr-indicatorSeparator"></span>

                        <div aria-hidden="true" className=" css-tlfecz-indicatorContainer">
                            <DownSvg/>
                        </div>

                    </div>
                </div>



                <div className=" css-26l3qy-menu">
                    <div className=" css-11unzgr">
                        <div className=" css-9gakcf-option" id="react-select-15-option-0" tabIndex="-1">Ocean</div>
                        <div className=" css-dlldml-option" id="react-select-15-option-1" tabIndex="-1">Blue</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-2" tabIndex="-1">Purple</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-3" tabIndex="-1">Red</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-4" tabIndex="-1">Orange</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-5" tabIndex="-1">Yellow</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-6" tabIndex="-1">Green</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-7" tabIndex="-1">Forest</div>
                        <div className=" css-1n7v3ny-option" id="react-select-15-option-8" tabIndex="-1">Slate</div>
                        <div className=" css-yt9ioa-option" id="react-select-15-option-9" tabIndex="-1">Silver</div>
                    </div>
                </div>



                <input name="colors" type="hidden" value="ocean"/>

            </div>

        </div>

        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          streetViewControl={false}
          mapTypeControl={false}
          fullscreenControl={false}
          zoomControl={false}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />

        </>
    );
  }
}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  LoadingContainer: LoadingContainer
})(MapContainer);


