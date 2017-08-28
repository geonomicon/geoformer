import PT from 'prop-types'

const { func } = PT
const Switch = ({ conditionerFn, leftFn, rightFn }) => conditionerFn() ? leftFn() : rightFn()

Switch.propTypes = {
  conditionerFn:func,
  leftFn:func,
  rightFn: func
}

export default Switch
