import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import './PhoneDetails.css';

class PhoneDetails extends React.Component {
  componentDidMount() {
    this.props.fetchPhone(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { item, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error error={error.message} />;
    }

    if (item.id) {
      return (
        <section className="PhoneDetails">
          <article>
            <h2>{item.details.title}</h2>
            <br />
            <p><img src={item.details.image} alt={item.details.title} /></p>
          </article>
          <article>
            <h3>Details</h3>
            <br />
            <p><b>Brand</b>: {item.details.brand}</p>
            <p><b>Unveiled</b>: {item.details.unveiled}</p>
            <p><b>Status</b>: {item.details.status}</p>
          </article>
          <article>
            <h3>Design</h3>
            <br />
            <p><b>Size</b>: {item.design.size}</p>
            <p><b>Weight</b>: {item.design.weight}</p>
            <p><b>UsableSurface</b>: {item.design.usableSurface}</p>
            <p><b>Colors</b>: {item.design.colors.join(' - ')}</p>
          </article>
          <article>
            <h3>Screen</h3>
            <br />
            <p><b>Diagonal</b>: {item.screen.diagonal}</p>
            <p><b>AspectRatio</b>: {item.screen.aspectRatio}</p>
            <p><b>Type</b>: {item.screen.type}</p>
            <p><b>Resolution</b>: {item.screen.resolution}</p>
          </article>
          <article>
            <h3>Hardware</h3>
            <br />
            <p><b>CPU</b>: {item.hardware.cpu}</p>
            <p><b>GPU</b>: {item.hardware.gpu}</p>
            <p><b>RAM</b>: {item.hardware.ram}</p>
            <p><b>Capacity</b>: {item.hardware.capacity.join(' - ')}</p>
          </article>
          <article>
            <h3>Antutu Score</h3>
            <br />
            <h1 className="score">{item.performance.antutuScore}</h1>
          </article>
        </section>
      );
    }

    return null;
  }
}

PhoneDetails.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  fetchPhone: PropTypes.func,
  match: PropTypes.object,
  reset: PropTypes.object,
};

export default PhoneDetails;
