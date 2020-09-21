import React from 'react';

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadEmployeeData = () => {
    fetch(
      'https://api.memegen.link/images/aag/ge/gds/_.png?watermark=none',
    ).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'meme';
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadEmployeeData}>Download Meme</button>
        <p />
      </div>
    );
  }
}

export default DownloadFile;
