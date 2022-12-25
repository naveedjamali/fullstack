import axios from "axios";
import { Component } from "react";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {users:[]}
  }


  componentWillMount(){
    
    axios.get('https://api.randomuser.me/?nat=US&results=5').then(function(response){
      console.log(response.data.results);

        });
  }

  render() {
    return <>
      <div className='App'>
        We will be back
      </div>
    </>
  };
}

export default App;
