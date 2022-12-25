const { Component } = require("react");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
  componentWillMount(){
    
  }
  render() {
    return <div>
      We will be back;
    </div>
  }
}

export default App;