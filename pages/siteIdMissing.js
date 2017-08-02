import Head from '@worona/next/head';
import Router from '@worona/next/router';
import Link from '@worona/next/link';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteId: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ siteId: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = `/?siteId=${this.state.siteId}`;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please enter your Site ID:
          {' '}
          <input type="text" value={this.state.siteId} onChange={this.handleChange} />
        </label>
        {' '}
        <input type="submit" value="Submit" />
        <style jsx>{`
          input {
            background: lightgrey;
          }
        `}</style>
      </form>
    );
  }
}

const Input = () => <input type="text" value="" />;

export default () =>
  <div>
    <Head>
      <title>Worona - Site ID missing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Form />
  </div>;
