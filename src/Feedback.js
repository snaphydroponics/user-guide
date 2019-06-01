import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Feedback extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      'feedback-type': '',
      'feedback-details': ''
    };
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value}); 

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const lang = this.props.match.url.match(/^\/en/) ? 'en' : 'fil';
    const { type, details } = this.state;
    return(
      <div className="container">
        <header className="my-5">
          <h1 id="content">{
            lang === 'en' ?
              <span>Leave Feedback</span> :
              <span>Magiwan ng <i lang="en">Feedback</i></span>
          }</h1>
        <p className="lead">{
          lang === 'en' ? 
            <span>Please help us improve this app. Leave a feedback below.</span> :
            <span>Mangyaring tulungan kaming mapabuti pa ang <i lang="en">app</i> na ito. Mag-iwan ng <i lang="en">feedback</i> sa baba.</span>
        }</p>

        </header>
        <Form className="my-3" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="feedback-type" size="lg" as="legend" column>{
              lang === 'en' ?  "I’m telling you about" : "Ang aking ipinaaalam ay tungkol sa."}
            </Form.Label>
            <Form.Control onChange={this.handleChange} value={type} id="feedback-type" name="feedback-type" size="lg" as="select">
              <option>{ lang === 'en' ? 'Choose…' : 'Pumili…' }</option>
              <option value="bug-typo">{ lang === 'en' ? 'A bug or typographical error.' : 'Bug o typographical na pagkakamali'}</option>
              <option value="enhancement">{ lang === 'en' ? 'An enhancement or feature request' : 'Pagpapahusay o paghiling ng feature'}</option>
              <option value="kudos">{ lang === 'en' ? 'Kudos' : 'Pagpuri' }</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="feedback-details" size="lg" as="legend" column>{ lang === 'en' ? 'Details' : 'Mga detalye' }</Form.Label>
            <Form.Control onChange={this.handleChange} value={details} id="feedback-details" name="feedback-details" size="lg" as="textarea" rows="5" placeholder="Please tell us the details."></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">{ lang === 'en' ? 'Send Feedback' : <span>Ipadala ang <i lang="en">feedback</i></span>}</Button>
          <input type="hidden" name="form-name" value="feedback" />
        </Form>
      </div>
    );
  }
}

export default Feedback;
