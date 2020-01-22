import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './EventCard.scss';

import eventShape from '../../../helpers/propz/eventShape';

class EventCard extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    deleteAEvent: PropTypes.func,
  }

  deleteEventEvent = (e) => {
    e.preventDefault();
    const { deleteAEvent, event } = this.props;
    deleteAEvent(event.id);
  }

  render() {
    const { event } = this.props;
    return (
<div className="EventCard">
  <img src={event.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{event.title}</h5>
  <p className="card-text">{event.summary}</p>
  <Link className="btn btn-secondary edit" to={`/event/${event.id}/edit`}>Edit</Link>
  <button className="btn btn-secondary" onClick={this.deleteEventEvent}>Delete</button>
    </div>
    </div>
    );
  }
}

export default EventCard;
