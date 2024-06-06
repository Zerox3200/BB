import React from 'react';
import './Category.scss';
import { HostLink } from '../Host/Host';

export default function Category({ Image }) {
    return <>
        <div className="category">
            <img
                src={`${HostLink}/${Image}`}
                alt="..." />
        </div>
    </>
}
