import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    const video = this.state.selectedVideo;
    if (!video) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div id="search-bar">
            <SearchBar onSearchChange={this.search} />
          </div>
          <div id="video-section">
            <VideoDetail video={this.state.selectedVideo} />
            <div id="video-list">
              <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
