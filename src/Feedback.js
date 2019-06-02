import React from 'react'
import FeedbackForm from './FeedbackForm';

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      success: null
    };
  }


  render() {
    const lang = this.props.match.url.match(/^\/en/) ? 'en' : 'fil';
    const { loading, success } = this.state;

    let display = (<FeedbackForm loading={loading} lang={lang} />);

    if (success === true) {
      display =  (
        <div class="alert alert-success my-3" role="alert">
          <h4 class="alert-heading">Feedback Sent!</h4>
          <p>Thank you for helping us improve this app.</p>
        </div>
      );
    }

    if (success === false) {
      display = (
        <div class="alert alert-warning my-3" role="alert">
          <h4 class="alert-heading">Failed to send feed back</h4>
          <p>Please try again later.</p>
        </div>
      );
    }

    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">{
            lang === 'en' ?
              <span>Send Feedback</span> :
              <span>Pagpadala ng <i lang="en">Feedback</i></span>
          }</h1>
        <p className="lead">{
          lang === 'en' ? 
            <span>Please help us improve this app. Send a feedback below.</span> :
            <span>Mangyaring tulungan kaming mapabuti pa ang <i lang="en">app</i> na ito. Magpadala ng <i lang="en">feedback</i> sa baba.</span>
        }</p>

        </header>
        {display}
      </div>
    );

  }
}


export default Feedback;
