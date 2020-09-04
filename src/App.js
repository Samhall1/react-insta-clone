import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeHeader from './components/HomeHeader';
import SearchHeader from './components/SearchHeader';
import AddImageHeader from './components/AddImageHeader';
import ActivityHeader from './components/ActivityHeader';
import ProfileHeader from './components/ProfileHeader';
import Header from './components/Header';
import { myImagesArray } from './components/img/instaImages';
import InstaStories from './components/InstaStories';
import ProfileInfo from './components/ProfileInfo';
import SearchPage from './components/SearchPage';
import SearchPageImages from './components/SearchPageImages';
import AddImagePage from './components/AddImagePage';
import AddImagePageTop from './components/AddImagePageTop';

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
    header: <HomeHeader />,
    images: myImagesArray,
    addImagePageGroup: {
        addImageOnFeed: myImagesArray[26],
        addImageDraft: myImagesArray[24]
    },
    userNames: [
      {
        name: 'Sam',
        image: myImagesArray[0],
        location: 'Manchester',
        postImage: myImagesArray[13],
        firstPerson: 'Silvia',
        userNameWhoLeftTheComment: 'Silvia',
        randomComment:'Soo cute'
      },
      {
        name: 'Silvia',
        image: myImagesArray[1],
        location: 'Leeds',
        postImage: myImagesArray[14],
        firstPerson: 'Adri',
        userNameWhoLeftTheComment: 'Adri',
        randomComment:'Cheeky Monkeys'

      },
      {
        name: 'Adri',
        image: myImagesArray[2],
        location: 'Cambridge',
        postImage: myImagesArray[15],
        firstPerson: 'Hamza',
        userNameWhoLeftTheComment: 'Hamza',
        randomComment:'Happy Family :)'
      },
      {
        name: 'Danny',
        image: myImagesArray[3],
        location: 'Manchester',
        postImage: myImagesArray[16],
        firstPerson: 'Donna',
        userNameWhoLeftTheComment: 'Donna',
        randomComment:'I think they are sleepy.'
      },
      {
        name: 'Donna',
        image: myImagesArray[4],
        location: 'Manchester',
        postImage: myImagesArray[17],
        firstPerson: 'Imran',
        userNameWhoLeftTheComment: 'Imran',
        randomComment:'What a lovely cat'
      },
      {
        name: 'Hamza',
        image: myImagesArray[5],
        location: 'Birmingham',
        postImage: myImagesArray[18],
        firstPerson: 'Adri',
        userNameWhoLeftTheComment: 'Adri',
        randomComment:'O dear'
      },
      {
        name: 'Imran',
        image: myImagesArray[6],
        location: 'Manchester',
        postImage: myImagesArray[19],
        firstPerson: 'Sam',
        userNameWhoLeftTheComment: 'Sam',
        randomComment:'Is it halloween already??'
      },
      {
        name: 'Jacob',
        image: myImagesArray[7],
        location: 'Shaw',
        postImage: myImagesArray[20],
        firstPerson: 'Neil',
        userNameWhoLeftTheComment: 'Neil',
        randomComment:'Wouldn\'t want to try take that pumpkin from him!!'
      },
      {
        name: 'Neil',
        image: myImagesArray[8],
        location: 'Salford',
        postImage: myImagesArray[21],
        firstPerson: 'Silvia',
        userNameWhoLeftTheComment: 'Silvia',
        randomComment:'Great picture!'
      },
      {
        name: 'Telmo',
        image: myImagesArray[9],
        location: 'Stockport',
        postImage: myImagesArray[22],
        firstPerson: 'Adri',
        userNameWhoLeftTheComment: 'Adri',
        randomComment:'Such a nice picture, where was it taken?'
      }
    ],
    likeButton: 2,
    searchPageImg: myImagesArray
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
    console.log("Button clicked");
    this.setState({
      ...this.state,
      activeWindow: 'home'
    });
  };

  likeButtonHandle = () => {
    console.log("button clicked");
    this.setState ({
      ...this.state,
      likeButton: this.state.likeButton + 1
    });
  };

  render(){
    const stories = this.state.userNames.map((item, index) => {
      return <InstaStories 
                  key={index} 
                  images={item.image} 
                  userName={item.name}/>
    });

    const instaPost = this.state.userNames.map((item, index) => {
      return <ProfileInfo
                key={index}
                imageUser={item.image}
                userName={item.name}
                location={item.location}
                imagePost={item.postImage}
                likeButtonHandle={this.likeButtonHandle}
                allLikes={this.state.likeButton}
                firstPerson={item.firstPerson}
                userNameWhoLeftTheComment={item.userNameWhoLeftTheComment}
                randomComment={item.randomComment}
                 />
    });

    const searchPageImg = this.state.searchPageImg.map((image, index) => {
      return <SearchPageImages
                  key={index}
                  searchPageImg={image} />
    });

    const addImagePage = this.state.images.map((item, index) => {
      return <AddImagePage
                  key={index}
                  addImageGroup={item} />
    });

    let mainWindow = null;
    switch (this.state.activeWindow) {
      case 'home':
        mainWindow = (
          <div>
            <div className='instaStoriesContainer'>
              {stories}
            </div>
            {instaPost}
          </div>
          
        )
        break;
        case 'search':
          mainWindow = (
            <div>
              <SearchPage />
              <div className='searchImagesContainer'>
                {searchPageImg}
              </div>
            </div>
          )
          break;
          case 'addImage':
            mainWindow = (
              <div>
                <div className='groupImageContainer'>
                  <AddImagePageTop
                    addImageOnFeed={this.state.addImagePageGroup.addImageOnFeed}
                    addImageDraft={this.state.addImagePageGroup.addImageDraft} />
                </div>
                {addImagePage}
              </div>
            )
            break;
      default:
        break;
    }

    

    return (
      <React.Fragment>
        <Header currentHeader={this.state.header} cancelButton={this.state.header.cancelButton} />
        <div className='main'>
          {mainWindow}
        </div>
        <Navbar
          clickedBtn={this.switchMainWindowHandler}
          activeBtn={this.state.activeWindow} />
      </React.Fragment>
     );
  }
 
}

export default App;
