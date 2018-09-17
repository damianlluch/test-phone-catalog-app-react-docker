import { connect } from 'react-redux';
import PhoneDetails from './PhoneDetails';
import { fetchPhone, reset } from './actions';

const mapStateToProps = state => ({
  item: state.phone.item,
  loading: state.phone.loading,
  error: state.phone.error,
});

const mapDispatchToProps = dispatch => ({
  fetchPhone: id => dispatch(fetchPhone(id)),
  reset: () => reset(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetails);
