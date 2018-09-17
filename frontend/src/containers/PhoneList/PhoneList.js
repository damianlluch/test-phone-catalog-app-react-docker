import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PhoneListItem from './components/PhoneListItem';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import './PhoneList.css';

class PhoneList extends React.Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  renderList() {
    return this.props.items.map(phone => (
      <Link key={phone.id} to={`/phones/${phone.id}`}>
        <PhoneListItem
          key={phone.id}
          image={phone.details.image}
          title={phone.details.title}
          diagonal={phone.screen.diagonal}
          capacity={phone.hardware.capacity[0]}
        />
      </Link>
    ));
  }

  render() {
    const { items, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error error={error.message} />;
    }

    if (items) {
      return (
        <section className="PhoneList">
          {this.renderList()}
        </section>
      );
    }

    return null;
  }
}

PhoneList.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  fetchPhones: PropTypes.func,
  reset: PropTypes.func,
};

PhoneList.defaultProps = {
  items: [],
  loading: false,
  error: null,
  fetchPhones: null,
};

export default PhoneList;
