const Header = () => {
  const logout = (event) => {
    event.preventDefault();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <p className="m-0">Get into the mind of a programmer.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
