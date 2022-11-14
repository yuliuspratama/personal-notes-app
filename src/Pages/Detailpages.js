import React from 'react';
import NoteDetail from '../Components/Notedetails';
import { getNote } from '../utils/Network-data';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; 

function DetailPageWrapper() {
    const { id } = useParams();
    console.log(id)
    return <DetailPage id={String(id)} />;
  }

class DetailPage  extends React.Component  {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      note: ""
    };
    
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);
    this.setState(() => {
      return {
        note: data
      }
    })
  }

  render() {
    if (this.state.note === null) {
      return <p>note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
