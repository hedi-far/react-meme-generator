import React from 'react';

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.img);
  }

  downloadFile = (props) => {
    fetch(this.props.img).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'meme';
        a.click();
      });
    });
  };

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadFile}>Download your meme</button>
        <p />
      </div>
    );
  }
}

export default DownloadFile;
