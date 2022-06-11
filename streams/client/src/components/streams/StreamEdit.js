import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
const StreamEdit = ({ fetchStream, streams, editStream }) => {
  const params = useParams();
  useEffect(() => {
    // because of a user may use a link like "http://localhost:3000/streams/edit/5" so it return undefined because the App doesn't load steam list in this page, so we first using fetchStream in order to load data
    fetchStream(params.id);
  }, []);
  const currentStream = streams[params.id];
  // console.log(streams);
  // console.log(currentStream);

  const onSubmit = (formValues) => {
    // console.log(currentStream.id, formValues);
    editStream(currentStream.id, formValues);
  };

  if (!currentStream) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(currentStream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: state.stream,
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
