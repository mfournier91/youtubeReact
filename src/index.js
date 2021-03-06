import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './APIKey'; //file is gitignored
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('mozart')
    self = this;

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => { //set an initial state with a search
      self.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar videoSearch={this.videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }); console.log('clicked!') } }
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
