import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  return props.href ? (
    <a {...props} className={classNames('Button', props.className)}>
      {props.children}
    </a>
  ) : (
		<button {...props} className={classNames('Button', props.className)}/>
  )
}

Button.prototype = {
	href: PropTypes.string
}

export default Button;