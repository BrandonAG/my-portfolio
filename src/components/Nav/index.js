import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      
      <nav>
        <div className="container nav-wrapper">
          <a data-testid="link" href="/" className="brand-logo brand-logo">
            Brandon Arnst-Goodrich
          </a>
          <ul className="right hide-on-med-and-down">
            {categories.map((category) => (
              <li
                className={`${
                  currentCategory.name === category.name && 'navActive'
                  }`}
                key={category.name}
              >
                <a>
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href="https://docs.google.com/document/d/1F2gJ8YD6ECvTfEqw6mlQ8dmVY5VXf5KdBk5c6ONhh70/edit?usp=sharing" target="_blank">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
