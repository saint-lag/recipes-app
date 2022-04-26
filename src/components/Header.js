import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import userIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = ({ title, search }) => {
  console.log(title);
  return (
    <div>
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ userIcon }
          alt="Icone de usuario"
        />
      </Link>
      <h1 data-testid="page-title">
        {title}
      </h1>
      {search && (
        <button
          type="button"
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Icone de busca"
          />
        </button>)}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.string,
}.isRequired;

export default Header;
