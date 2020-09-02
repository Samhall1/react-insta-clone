import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeHeader from './components/HomeHeader';
import SearchHeader from './components/SearchHeader';
import AddImageHeader from './components/AddImageHeader';
import ActivityHeader from './components/ActivityHeader';
import ProfileHeader from './components/ProfileHeader';
import Header from './components/Header';

class App extends React.Component {
  state = {
    activeWindow: 'home',
    headers: [
      <HomeHeader />,
      <SearchHeader />,
      <AddImageHeader />,
      <ActivityHeader />,
      <ProfileHeader />
    ],
    header: <HomeHeader />
  }

  switchMainWindowHandler = (event) => {
    if(event.target.className.includes('home')) {
      this.setState({
        activeWindow: 'home',
        header: this.state.headers[0]
      });
    } else if (event.target.className.includes('search')) {
      this.setState({
        activeWindow: 'search',
        header: this.state.headers[1]
      });
    } else if (event.target.className.includes('addImage')) {
      this.setState({
        activeWindow: 'addImage',
        header: this.state.headers[2]
      });
    } else if (event.target.className.includes('activity')) {
      this.setState({
        activeWindow: 'activity',
        header: this.state.headers[3]
      });
    } else if (event.target.className.includes('userProfile')) {
      this.setState({
        activeWindow: 'userProfile',
        header: this.state.headers[4]
      });
    }
  }

cancelButton = () => {
  console.log("Button clicked")
}

  render(){
    return (
      <React.Fragment>
        <Header currentHeader={this.state.header}/>
        <Navbar
          clickedBtn={this.switchMainWindowHandler}
          activeBtn={this.state.activeWindow} />
      </React.Fragment>
     );
  }
 
}

export default App;
