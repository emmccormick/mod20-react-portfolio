import React from "react";


function Nav() {

  const  categories = [
    { name: 'Projects', description: 'Examples of my projects' },
    { name: 'Contact', description: 'A form to contact me' },
  ];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
            Emily Rucka Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
          <a data-testid="projects" href="#projects" onClick={() => handleClick("Projects")}>
              Projects
            </a>
          </li>
          
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(category.name); }}>
                 {(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;