import { connect } from 'react-redux';
import PhoneList from './PhoneList';
import { fetchPhones, reset } from './actions';

const mapStateToProps = state => ({
  items: state.phones.items,
  loading: state.phones.loading,
  error: state.phones.error,
});

const mapDispatchToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhones()),
  reset: () => reset(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
