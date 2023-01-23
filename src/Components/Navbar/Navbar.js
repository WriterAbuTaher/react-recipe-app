import React from 'react';

const Navbar = ({ search, onChange, onSubmit }) => {
    return (
        <div>
            <nav className="navbar py-4">
                <div className="container">
                    <a className="navbar-brand text-success fw-semibold">React Recipe</a>
                    <form onSubmit={onSubmit} className="d-flex" role="search">
                        <input value={search} onChange={onChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;