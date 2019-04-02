import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CalculateScreen } from './component';
import { changeCountry } from '../../actions/changeCountry';
import { changeRates } from '../../actions/changeRates';
import { setCurrentRate } from '../../actions/setCurrentRate';
import { setInclude } from '../../actions/setInclude';
import { setPrice } from '../../actions/setPrice';
import { setGoodPrice } from '../../actions/setGoodPrice';
import { setGoodRate } from '../../actions/setGoodRate';
import { calculatePrice } from '../../actions/calculatePrice';

const mapStateToProps = state => ({
  data: state.data,
  country: state.country,
  rates: state.rates,
  currentRate: state.currentRate,
  included: state.included,
  price: state.price,
  bill: state.bill,
  goodPrice: state.goodPrice,
  goodRate: state.goodRate,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changeCountry,
    changeRates,
    setCurrentRate,
    setInclude,
    setPrice,
    calculatePrice,
    setGoodPrice,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen);
