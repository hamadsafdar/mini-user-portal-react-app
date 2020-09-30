import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const { show, handleClose, children } = props;
    const className = show ? 'modal display-block' : 'model dispaly-none';

    return (
        <div className={className}>
            <section className="modal-main">{children}</section>
            <button onClick={handleClose}>Cancel</button>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node
};

export default Modal;
