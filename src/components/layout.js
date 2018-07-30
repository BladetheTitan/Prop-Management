import React, { Component } from 'react';

import { Header, HeaderBar } from './header'

class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                <Header/>
                <HeaderBar/>
                <div className='layout-grid__sign-in'>
                
                </div>
            </div
        );
    }
}

export default Layout;