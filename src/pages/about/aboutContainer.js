import { connect } from 'react-redux'
import About from './about'
import { changeStatus } from '../../store/loading/actions'

function mapStateToProps(state) {
  return {
    isShow: state.loading.isShow
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onShow: () => dispatch(changeStatus('SHOW', true)),
    onHide: () => dispatch(changeStatus('HIDE', false)),
    changeStatus: (status) => dispatch(changeStatus('CHANGESTATE', status))
  }
}

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default AboutContainer
