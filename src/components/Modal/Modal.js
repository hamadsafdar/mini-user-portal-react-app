import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './styles.css';

const Modal = (props) => {
    const { show, handleClose, children, title } = props;

    if (show) {
        return (
            <div className="modal">
                <section className="modal-main">
                    <h3>{title}</h3>
                    <hr />
                    <div className="modal-content">{children}</div>
                    <hr />
                    <Button variant="cancel" onClick={handleClose}>
                        Cancel
                    </Button>
                </section>
            </div>
        );
    } else return null;
};

Modal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string
};

export default Modal;
