import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

class FeedbackButton extends React.Component {

  render() {
    const {lang, loading} = this.props;


    if (loading) {
      return (
        <Button variant="primary" disabled>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          { lang === 'en' ? "Loading…" : "Nagkakarga…" }
        </Button>
      );
    }
    return (
      <Button variant="primary" type="submit">{ lang === 'en' ? "Leave Feedback" : <span>Mag-iwan ng <i lang="en">Feedback</i></span> }</Button>
    );
  }
}

export default FeedbackButton;
