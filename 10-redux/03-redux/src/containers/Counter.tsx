import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add, decrement, increment } from '../actions/counter';
import Counter from '../components/Counter';
import { CounterState } from '../reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
