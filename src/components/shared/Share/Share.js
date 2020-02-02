import React from 'react';
import {
  FacebookIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import './Share.scss';

import eventShape from '../../../helpers/propz/eventShape';

class Share extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
  }

  render() {
    const { event } = this.props;
    return (
      <div className="fb-share-button" data-href="https://my-dash-93e26.firebaseapp.com/" data-layout="button" data-size="large">
  <p className="share">Share On: </p>
      <a target="_" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-dash-93e26.firebaseapp.com%2F&amp;src=sdkpreparse"><FacebookIcon className="fb"/></a>
      {/* <img src={event.imgUrl} className="event-pic rounded-circle" alt="..."/> */}
        </div>

    );
  }
}

export default Share;
