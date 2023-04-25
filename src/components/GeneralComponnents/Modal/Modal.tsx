import React, {FC, ReactNode} from 'react';

import css from './Modal.module.css';

interface ModalProps {
    activeModal: boolean;
    setActive: (active: boolean) => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({activeModal, setActive, children}) => {
    return (
        <div className={activeModal ? `${css.modal} ${css.active}` : css.modal} onClick={() => setActive(false)}>
            <div className={activeModal ? `${css.content} ${css.active}` : css.content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export {Modal};
