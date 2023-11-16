class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        app-bar{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        nav, nav ul, nav li, nav a{
            height: 100%;
        }

        nav{
          display: flex;
          justify-content: end;
          width: 100%;
        }

        .headings {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #logo {
          width: 15vw;
          min-width: 120px;
          height: 90%;
          background-position-y: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
          
        #hamburger {
            display: none;
            cursor: pointer;
        }
          
        .nav_list {
            list-style: none;
            display: flex;
        }
          
        .nav_list_item {
            padding-left: 2rem;
        }
          
        .nav_list_item a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: var(--text-color);
        }
          
        .nav_list_item a:hover{
            color: var(--primary);
        }

        @media (max-width: 685px){
            nav,
            nav ul,
            nav li,
            nav a {
              height: auto;
          }

          .headings {
            width: 100%;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            z-index: 10;
            background-color: var(--background);
            box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.25);
          }
        
          #hamburger {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            background-color: transparent;
            outline: none;
            border: none;
            color: var(--text-color);
            padding: 0.5rem 0.75rem;
            border-radius: 5px;
          }
        
          #hamburger:focus {
            background-color: var(--background-50);
          }
        
          #drawer {
            width: 100%;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            transform: translate(0, -200px);
            transition: 0.3s ease-in-out;
            background-color: var(--background);
            z-index: 1;
            pointer-events: none;
          }
        
          #drawer.active {
            transform: translate(0, 140px);
            pointer-events: all;
          }
        
          .nav_list {
            flex-direction: column;
          }
        
          .nav_list_item {
            border-bottom: 1px solid var(--background-50);
            padding: 0.5rem;
          }
        
          .nav_list_item a {
            display: flex;
            align-items: center;
            height: 50px;
            width: 100%;
          }
        } 
        </style>
        <div class="headings">
          <div id="logo"></div>
          <button id="hamburger">☰</button>
        </div>
        <nav id="drawer">
        <ul class="nav_list">
          <li class="nav_list_item"><a href="#/">Home</a></li>
          <li class="nav_list_item"><a href="#/favorite">Favorite</a></li>
          <li class="nav_list_item">
          <a href="https://github.com/SoLiDinity">About Us</a>
          </li>
        </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
