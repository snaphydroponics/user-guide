import React from 'react'
import FeedbackForm from './FeedbackForm';

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      success: null
    };

    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(success) {
    this.setState({
      success: success,
    });
  }


  render() {
    const lang = this.props.match.url.match(/^\/en/) ? 'en' : 'fil';
    const { loading, success } = this.state;

    let display = (<FeedbackForm handleRequest={this.handleRequest} loading={loading} lang={lang} />);

    if (success === true) {
      display =  (
        <div className="alert alert-success my-3" role="alert">
          <h4 className="alert-heading">{ lang === 'en' ? 'Feedback Sent!' : <span>Napadala ang <i lang="en">Feedback</i>!</span>}</h4>
          { lang === 'en' ? <p>Thank you for helping us improve this app.</p> : <p>Salamat sa pagtulong na mas mapabuti ang <i lang="en">app</i> na ito.</p>}
        </div>
      );
    }

    if (success === false) {
      display = (
        <div className="alert alert-warning my-3" role="alert">
          <h4 className="alert-heading">{ lang === 'en' ? 'Failed to Send Feedback' : <span>Nabigong Ipadala ang <i lang="en">Feedback</i></span>}</h4>
          <p>{ lang === 'en' ? 'Sorry. Something went wrong. Please try again later.' : 'Paumanhin. May mali kung saan. Pakisubukan ulit mamaya.'}</p>
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
