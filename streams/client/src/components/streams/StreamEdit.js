import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStream } from "../../actions";
const StreamEdit = ({ fetchStream, streams }) => {
  const params = useParams();
  useEffect(() => {
    // because of a user may use a link like "http://localhost:3000/streams/edit/5" so it return undefined because the App doesn't load steam list in this page, so we first using fetchStream in order to load data
    fetchStream(params.id);
  }, []);
  const currentStream = streams[params.id];
  // console.log(streams);
  console.log(currentStream);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state) => {
  return {
    streams: state.stream,
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
