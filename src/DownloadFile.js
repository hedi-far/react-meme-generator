import React from 'react';

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.img);
  }

  downloadFile = (props) => {
    fetch(this.props.img).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meme';
        a.click();
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.downloadFile}>Download your meme</button>
      </div>
    );
  }
}

export default DownloadFile;
