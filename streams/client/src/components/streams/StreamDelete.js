import { connect } from "react-redux";
import Modal from "../../Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { useEffect } from "react";
const StreamDelete = ({ streams, fetchStream, deleteStream }) => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetchStream(params.id);
  }, []);
  const currentStream = streams[params.id];
  const actions = (
    <>
      <button
        onClick={() => deleteStream(params.id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!currentStream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${currentStream.title}`;
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => navigate("/")}
    />
  );
};

const mapStateToProps = (state) => {
  return { streams: state.stream };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
