// expressão lambda, ou arrow function, faz com que uma função
// pareça ser mais uma constante
const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <span id = "logo"><span id = "logoFirst">Dev</span><span>Superior</span></span>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;