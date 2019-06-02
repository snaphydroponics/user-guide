import {Formik} from 'formik';
import React from 'react';
import Form from 'react-bootstrap/Form';
import FeedbackButton from './FeedbackButton';
//import axios from 'axios';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);

    //const config = {
    //  headers: {
    //    'Content-Type': 'application/x-www-form-urlencoded'
    //  }
    //};

    this.setState({
      loading: true
    });

    fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(values)
    }).then((resp) => {
      this.props.handleRequest(resp.status === 200);
    }).catch((error) => {
      this.handleRequest(false);
    });

    //axios.post('/feedback?=no-cache=1', values, config).then((result) => {
    //  this.props.handleRequest(true);
    //}).catch((err) => {
    //  this.props.handleRequest(false);
    //}).finally(() => {
    //});
  }

  render() {
    const {loading, lang} = this.props;
    return (
        <Formik
          initialValues={{ type: '', details: '', 'form-name': 'feedback' }}
          validate={(values) => {
            let errors = {};
            if (!values.type) {
              errors.type = true;
            }

            if (!values.details) {
              errors.details = true;
            }
            return errors;
          }}
          onSubmit={this.handleSubmit}>
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => (
          <Form noValidate disabled={loading} className="my-3" onSubmit={handleSubmit}>
            <Form.Group controlId="feedback-type">
              <Form.Label size="lg" as="legend" column>{
                lang === 'en' ?  "I’m telling you about" : "Ang aking ipinaaalam ay tungkol sa."}
              </Form.Label>
              <Form.Control disabled={loading} required onChange={handleChange} value={values.type} name="type" size="lg" as="select" isInvalid={touched.type && errors.type}>
                <option value="">{ lang === 'en' ? 'Choose…' : 'Pumili…' }</option>
                <option value="bug-typo">{ lang === 'en' ? 'A bug or typographical error.' : 'Bug o typographical na pagkakamali'}</option>
                <option value="enhancement">{ lang === 'en' ? 'An enhancement or feature request' : 'Pagpapahusay o paghiling ng feature'}</option>
                <option value="kudos">{ lang === 'en' ? 'Kudos' : 'Pagpuri' }</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{ lang === 'en' ? 'Please choose.' : 'Mangyaring pumili.' }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="feedback-details">
              <Form.Label size="lg" as="legend" column>{ lang === 'en' ? 'Details' : 'Mga detalye' }</Form.Label>
              <Form.Control disabled={loading} required onChange={handleChange} value={values.details} name="details" size="lg" as="textarea" rows="5" placeholder={ lang === 'en' ? "Details…" : "Mga detalye…" } isInvalid={touched.type && errors.details} ></Form.Control>
              <Form.Control.Feedback type="invalid">{ lang === 'en' ? 'Please fill this out.' : 'Mangyaring punan ito.' }</Form.Control.Feedback>
            </Form.Group>
            <FeedbackButton loading={loading} lang={lang} />
            <p className="d-none">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <input type="hidden" name="form-name" value="feedback" />
          </Form>
          )
        }</Formik>
    );
  }
}

