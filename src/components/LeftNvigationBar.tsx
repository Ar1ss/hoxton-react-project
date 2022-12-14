import { Link } from "react-router-dom";

export function LeftNvigationBar() {
  return (
    <section className='left-navigation-bar'>

      <ul className='navigation-list'>

        <Link to='/'>
          <img className='twitter-logo' width={50} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="" />
        </Link>


        <li className='navigation-list__item' >
          <Link className='navigation-link' to="/">
            <span className="material-symbols-outlined nav-icon">
              home
            </span> Home</Link>
        </li>
        
        
        
        <li className='navigation-list__item' >
          <Link className='navigation-link' to="/bookmarks">
            <span className="material-symbols-outlined nav-icon">
              bookmark
            </span>Bookmarks</Link>
        </li>
        <li className='navigation-list__item' >
          <Link className='navigation-link' to="/lists">
            <span className="material-symbols-outlined nav-icon">
              list_alt
            </span> Lists</Link>
        </li>
        <li className='navigation-list__item' >
          <Link className='navigation-link' to="/profile">
            <span className="material-symbols-outlined nav-icon">
              person
            </span>
            Profile
          </Link>
        </li>
       


        


        <footer>
          <Link to="/profile">
          <div className="button">
            <div>
              <img className="profile-image" width={50} src="https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg" alt="account-image" />
            </div>
            <div className="name">Roronoa Zoro</div>
            <div className="username">@roronoaZoro</div>

          </div>
          </Link>
        </footer>

      </ul>
    </section>
  );
}