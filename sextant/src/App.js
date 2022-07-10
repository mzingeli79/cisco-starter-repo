import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Banner/>
        <Exhibit/>
    </div>
  );
};

class Banner extends React.Component {
  render(){
    return (
    <div>
      <header className='banner'>
        <section className='banner-name'>Sextant</section>
      </header>
    </div>
    );
  }
};

class Exhibit extends React.Component {
  render(){
    return (
      <div>
        <DataPoints/>
      </div>
    );
  }
};

class DataPoints extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='exhibit-class'>
        <h1>Data Points</h1>
        <section className='display-components'>
          <div className='display'>
            <UsersPublicIP/>
          </div>
          <div className='display'>
            <LatencyInformation/>
          </div>
        </section>
      </div>
    );
  }
};

class UsersPublicIP extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userPublicIP: ''
    };
  }
  render(){
    return (
      <div>
        <section>
          <h1>User-Public-IP:</h1>
          <p className='user-ip'>{this.state.userPublicIP='123.456.789'}</p>
        </section>
      </div>
    );
  }
};

class LatencyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latencyInfo: ''
    };
  }
  render(){
    return (
      <div>
        <section>
          <h1>Latency-Information:</h1>
          <p className='latency-info'>{this.state.latencyInfo='11.2[ms]'}</p>
        </section>
      </div>
    );
  }
};

export default App;