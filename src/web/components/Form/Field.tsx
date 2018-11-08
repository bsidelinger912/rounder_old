/**
 * @class Field
 * @description
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

const styles = require('./styles.scss');

export class Field extends React.Component<any, any> {
  static propTypes = {
    label: PropTypes.string,
    field: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    label: undefined,
  }

  static childContextTypes = {
    field: PropTypes.string,
  }

  static contextTypes = {
    validationErrors: PropTypes.object,
  }

  getChildContext() {
    return { field: this.props.field };
  }

  render() {
    const { children, label, field } = this.props;
    const { validationErrors } = this.context;
    const labelElem = label ? <label htmlFor={field}>{label}</label> : null;

    const fieldError = validationErrors[field];
    const errorElem = fieldError ? (
      <div className={styles.fieldError}>{fieldError}</div>
    ) : null;

    return (
      <div className={styles.formRow}>
        {labelElem}
        {children}
        {errorElem}
      </div>
    );
  }
}

export default Field;