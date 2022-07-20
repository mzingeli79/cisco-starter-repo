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
      ipv4:'',
      ipv6:''
    }
  }
  componentDidMount() {
    Promise.all([fetch('https://api.ipify.org?format=json'),
    fetch('https://api64.ipify.org?format=json')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      ipv4: data1['ip'],
      ipv6: data2['ip']
    }))
  }
  render() {
    return (
      <div>
        <section>
          <h1>User Public IP Adresses:</h1>
          <p className='user-ip'>IPv4: {this.state.ipv4}</p>
          <p className='user-ip'>IPv6: {this.state.ipv6}</p>
        </section>
      </div>
    );
  };
};

var W3CWebSocket = require('websocket').w3cwebsocket;
var client = new W3CWebSocket('ws://localhost:55455/ws');

class LatencyInformation extends React.Component {
  
  componentDidMount() { 
    client.onopen = () => {
      console.log('Websocket Client Connected');
    };
    client.onerror = () => {
      console.log('Connecton Error');
    };
    client.onclose = () => {
      console.log('Client Closed');
    };
    client.onmessage = (e) => {
      const packetArrival = (e.data);
      const dateInUnix = new Date().getTime();
      const latency = dateInUnix - packetArrival;
      const newDate = new Date(latency);
      document.querySelector('.latency-info').innerHTML =newDate.getMilliseconds()+'ms';
    
    }
  }
  render(){
    return (
      <div>
        <section>
          <h1>Packet Latency:</h1>
          <p className='latency-info'></p>
        </section>
      </div>
    );
  }
};

export default App;