import React from 'react';
import { Link } from 'react-router-dom'

type Props = {
    auth: { id: number | '', name: string } | null;
    onLogout: () => void;
}

const HeaderComponent: React.FC<Props> = ({ auth, onLogout }) => {
    return (
        <>
            <div className='headerContainer'>
                <div className="headerWraper">

                    <div className="logo"><img src="/images/ek_logo.png" alt=''></img></div>
                    <div className="button">{auth ? <button className={`btn ${auth ? 'logout' : ''}`} onClick={onLogout}>Logout</button> : <Link to='/' className={`btn ${auth ? '' : 'login'}`}>login</Link>}</div>
                </div>

            </div >
            <div className="space"></div>

        </>
    );
};

export default HeaderComponent;