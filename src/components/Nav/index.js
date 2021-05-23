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
              <a href="https://www.linkedin.com/in/brandon-arnst-goodrich-89677b84" target="_blank">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
