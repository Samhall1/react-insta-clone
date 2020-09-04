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

import ActivityPage from './components/ActivityPage';

import ProfileUserPageTop from './components/ProfileUserPageTop';
import ProfileUserPageBottomImages from './components/ProfileUserPageBottomImages';
import ProfileButtons from './components/ProfileButtons';


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
        postImage: myImagesArray[24],
        firstPerson: 'Imran',
        userNameWhoLeftTheComment: 'Silvia',
        randomComment:'Soo cute ❤️'
      },
      {
        name: 'Alex',
        image: myImagesArray[23],
        location: 'Manchester',
        postImage: myImagesArray[17],
        firstPerson: 'Telmo',
        userNameWhoLeftTheComment: 'Donna',
        randomComment:'Awww 🥰'
      },
      {
        name: 'Silvia',
        image: myImagesArray[1],
        location: 'Leeds',
        postImage: myImagesArray[14],
        firstPerson: 'Sam',
        userNameWhoLeftTheComment: 'Adri',
        randomComment:'Cheeky Monkeys 🙈❤️'

      },
      {
        name: 'Adri',
        image: myImagesArray[2],
        location: 'Cambridge',
        postImage: myImagesArray[15],
        firstPerson: 'Hamza',
        userNameWhoLeftTheComment: 'Hamza',
        randomComment:'Happy Family 😊'
      },
      {
        name: 'Danny',
        image: myImagesArray[3],
        location: 'Manchester',
        postImage: myImagesArray[16],
        firstPerson: 'Donna',
        userNameWhoLeftTheComment: 'Donna',
        randomComment:'I think they are sleepy. 🤔🥱🥱🥱🥱'
      },
      {
        name: 'Donna',
        image: myImagesArray[4],
        location: 'Manchester',
        postImage: myImagesArray[17],
        firstPerson: 'Imran',
        userNameWhoLeftTheComment: 'Danny',
        randomComment:'What a lovely cat 😍'
      },
      {
        name: 'Hamza',
        image: myImagesArray[5],
        location: 'Birmingham',
        postImage: myImagesArray[18],
        firstPerson: 'Adri',
        userNameWhoLeftTheComment: 'Alex',
        randomComment:'O dear 🙄🙄🙄🙄🙄🙄'
      },
      {
        name: 'Imran',
        image: myImagesArray[6],
        location: 'Manchester',
        postImage: myImagesArray[19],
        firstPerson: 'Sam',
        userNameWhoLeftTheComment: 'Sam',
        randomComment:'Is it Halloween already?? 👻'
      },
      {
        name: 'Jacob',
        image: myImagesArray[7],
        location: 'Shaw',
        postImage: myImagesArray[20],
        firstPerson: 'Neil',
        userNameWhoLeftTheComment: 'Telmo',
        randomComment:'Wouldn\'t want to try take that pumpkin from him!! 🎃🎃🎃🎃🎃'
      },
      {
        name: 'Neil',
        image: myImagesArray[8],
        location: 'Salford',
        postImage: myImagesArray[21],
        firstPerson: 'Silvia',
        userNameWhoLeftTheComment: 'Jacob',
        randomComment:'Great picture! 👍👍👍👍👍'
      },
      {
        name: 'Telmo',
        image: myImagesArray[9],
        location: 'Stockport',
        postImage: myImagesArray[22],
        firstPerson: 'Adri',
        userNameWhoLeftTheComment: 'Sam',
        randomComment:'Such a nice picture, where was it taken? 🥰🥰🥰🥰🥰🥰🥰'
      }
    ],
    likeButton: 2,
    searchPageImg: myImagesArray,
    activityPage: [
      {
        activityUserImage: myImagesArray[0],
        activityUserName: 'Sam',
        activityText: 'liked your comment:',
        activityCommentText: 'Ohhh @Hamza, @Adri, @Alex 🥰',
        activityPostImage: myImagesArray[14]
      },
      {
        activityUserImage: myImagesArray[1],
        activityUserName: 'Silvia',
        activityText: 'liked your comment:',
        activityCommentText: 'Nice 😉',
        activityPostImage: myImagesArray[15]
      },
      {
        activityUserImage: myImagesArray[2],
        activityUserName: 'Adri',
        activityText: 'liked your comment:',
        activityCommentText: 'You\'re so beautiful ❤️',
        activityPostImage: myImagesArray[16]
      },
      {
        activityUserImage: myImagesArray[4],
        activityUserName: 'Danny',
        activityText: 'liked your comment:',
        activityCommentText: 'Nice job 👍👍👍👍',
        activityPostImage: myImagesArray[10]
      },
      {
        activityUserImage: myImagesArray[5],
        activityUserName: 'Hamza',
        activityText: 'liked your comment:',
        activityCommentText: 'Wow 🔥',
        activityPostImage: myImagesArray[10]
      },
      {
        activityUserImage: myImagesArray[6],
        activityUserName: 'Imran',
        activityText: 'liked your comment:',
        activityCommentText: 'How was your week so far❓ 🧐🙈🙉🙊',
        activityPostImage: myImagesArray[12]
      },
      {
        activityUserImage: myImagesArray[0],
        activityUserName: 'Sam',
        activityText: 'liked your comment:',
        activityCommentText: 'Ohhh 🥰',
        activityPostImage: myImagesArray[14]
      },
      {
        activityUserImage: myImagesArray[1],
        activityUserName: 'Silvia',
        activityText: 'liked your comment:',
        activityCommentText: 'Nice 😉',
        activityPostImage: myImagesArray[15]
      },
      {
        activityUserImage: myImagesArray[2],
        activityUserName: 'Adri',
        activityText: 'liked your comment:',
        activityCommentText: 'You\'re so beautiful ❤️',
        activityPostImage: myImagesArray[16]
      },
      {
        activityUserImage: myImagesArray[4],
        activityUserName: 'Danny',
        activityText: 'liked your comment:',
        activityCommentText: 'Nice job 👍👍👍👍',
        activityPostImage: myImagesArray[10]
      },
      {
        activityUserImage: myImagesArray[5],
        activityUserName: 'Hamza',
        activityText: 'liked your comment:',
        activityCommentText: 'Wow 🔥',
        activityPostImage: myImagesArray[10]
      },
      {
        activityUserImage: myImagesArray[6],
        activityUserName: 'Imran',
        activityText: 'liked your comment:',
        activityCommentText: 'How was your week so far❓ 🧐🙈🙉🙊',
        activityPostImage: myImagesArray[12]
      }
    ],
    profileUser: {
      userImageProfile: myImagesArray[27],
      usernameProfile: 'Code Nation',
      postsProfile: '20',
      followersProfile: '21',
      followingProfile: '1000'
    }
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

    const activityPage = this.state.activityPage.map((item, index) => {
      return <ActivityPage
                key={index}
                activityUserImage={item.activityUserImage}
                activityUserName={item.activityUserName}
                activityText={item.activityText}
                activityCommentText={item.activityCommentText}
                activityPostImage={item.activityPostImage} />

    });

    const profileUserImages = this.state.images.map((item, index) => {
      return <ProfileUserPageBottomImages
                key={index}
                images={item} />
    })

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
        case 'activity':
          mainWindow = (
            <div>
              {activityPage}
            </div>
          )
          break;
        case 'userProfile':
          mainWindow = (
            <div>
              <ProfileUserPageTop
                userImageProfile={this.state.profileUser.userImageProfile}
                usernameProfile={this.state.profileUser.usernameProfile}
                postsProfile={this.state.profileUser.postsProfile}
                followersProfile={this.state.profileUser.followersProfile}
                followingProfile={this.state.profileUser.followingProfile} />
                <div className='instaStoriesContainer'>
                  {stories}
                </div>
                <ProfileButtons />
                <div className='groupImageContainer'>
                  {profileUserImages}
                  
                </div>
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
