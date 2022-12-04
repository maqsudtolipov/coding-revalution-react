const Header = (props) => {
  return (
    // <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
    <header className={props.active ? "active" : "not-active"}>
      <div className='logo'>Logo</div>
      <input type='text' onChange={props.keyword} />
      <button
        onClick={() => {
          props.changeColor();
        }}
      >
        Change it
      </button>
    </header>
  );
};

export default Header;
