import React from 'react';
import { store } from './store';
import { setTechnology } from './actions';

const ButtonGroup = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button 
                key={`btn-${i}`}
                data-tech={tech}
                className='hello-btn'
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
};

export default ButtonGroup;