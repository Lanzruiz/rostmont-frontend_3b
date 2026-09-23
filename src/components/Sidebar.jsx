function Sidebar() {
  return (
    <div className="sidebar-wrapper" id="sidebar">

      {/* Brand Logo / Identity */}
      <a href="index.html" className="sidebar-brand">
        <i className="bi bi-asterisk"></i>
        <span>Spark Admin</span>
      </a>

      {/* Navigation Menu */}
      <div className="flex-grow-1 overflow-y-auto">

        {/* Group: Menu */}
        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Menu</div>

          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <a
                href="index.html"
                className="sidebar-menu-link active"
                id="menu-overview"
                title="Overview"
              >
                <i className="bi bi-grid-fill"></i>
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Group: Components */}
        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Components</div>

          <ul className="sidebar-menu-list">

            <li className="sidebar-menu-item">
              <a
                href="tables-basic.html"
                className="sidebar-menu-link"
                id="menu-basictables"
                title="Basic Tables"
              >
                <i className="bi bi-table"></i>
                <span>Basic Tables</span>
              </a>
            </li>

            <li className="sidebar-menu-item">
              <a
                href="ui-forms.html"
                className="sidebar-menu-link"
                id="menu-uiforms"
                title="Forms and Input"
              >
                <i className="bi bi-input-cursor-text"></i>
                <span>Forms &amp; Input</span>
              </a>
            </li>

            <li className="sidebar-menu-item">
              <a
                href="ui-buttons.html"
                className="sidebar-menu-link"
                id="menu-uibuttons"
                title="Buttons"
              >
                <i className="bi bi-menu-button-wide-fill"></i>
                <span>Buttons &amp; Alerts</span>
              </a>
            </li>

          </ul>
        </div>

        {/* Group: Pages */}
        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Pages</div>

          <ul className="sidebar-menu-list">

            <li className="sidebar-menu-item">
              <a
                href="page-blank.html"
                className="sidebar-menu-link"
                id="menu-blankpage"
                title="Blank Page"
              >
                <i className="bi bi-file-earmark"></i>
                <span>Blank Page</span>
              </a>
            </li>

            <li className="sidebar-menu-item">
              <a
                href="page-login.html"
                className="sidebar-menu-link"
                id="menu-loginpage"
                title="Login Page"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login Screen</span>
              </a>
            </li>

            <li className="sidebar-menu-item">
              <a
                href="page-404.html"
                className="sidebar-menu-link"
                id="menu-404"
                title="404 Page"
              >
                <i className="bi bi-slash-circle"></i>
                <span>Error 404</span>
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Sidebar Profile Card */}
      <div className="sidebar-profile">
        <img
          src="assets/images/avatar.png"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
          }}
          alt="Administrator"
          className="sidebar-profile-img"
        />

        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">Administrator</div>
          <div className="sidebar-profile-email">admin@gmail.com</div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;