import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStream, editStream } from "../../actions";
import flv from "flv.js";
import { useRef } from "react";
const StreamShow = ({ fetchStream, streams, editStream }) => {
  const params = useParams();
  const videoRef = useRef();
  useEffect(() => {
    // because of a user may use a link like "http://localhost:3000/streams/edit/5" so it return undefined because the App doesn't load steam list in this page, so we first using fetchStream in order to load data

    fetchStream(params.id);
    buildPlayer();
  }, []);
  const currentStream = streams[params.id];
  const buildPlayer = () => {
    if (!currentStream) {
      return;
    }
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${params.id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  };
  // console.log(streams);
  // console.log(currentStream);

  if (!currentStream) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <video ref={videoRef} src="" style={{ width: "100%" }} controls />
      <h1>{currentStream.title}</h1>
      <h5>{currentStream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: state.stream,
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
