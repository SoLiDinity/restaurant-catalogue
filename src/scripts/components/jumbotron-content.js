class JumbotronContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      jumbotron-content {
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }

      jumbotron-content .jumbotron-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 80%;
      }
      
      jumbotron-content h1 {
        font-size: clamp(28px, 3vw, 800px);
        color: var(--text-color);
        font-style: italic;
        text-align: center;
      }
      
      jumbotron-content span {
        color: var(--primary);
        font-weight: bold;
        font-style: italic;
      }
      
      jumbotron-content p {
        color: var(--text-color);
        margin: 1rem;
        text-align: center;
        font-size: clamp(12px, 1.25vw, 800px);
      }
      
      jumbotron-content a {
        margin-top: 1rem;
        padding: .75rem 3rem;
        font-size: 1rem;
        font-weight: bold;
        background-color: var(--primary);
        color: var(--background);
        border-radius: 50px;
        width: fit-content;
      }
      
      jumbotron-content a:hover {
        scale: 105%;
      }
      
      jumbotron-content a:focus {
        outline: 1px solid white;
      }

      jumbotron-content .img-container {
        width: 100%;
        height: 100%;
      }

      jumbotron-content .img-container::before {
        content: "";
        height: 300px;
        position: absolute;
        top: 80px;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        background: linear-gradient(var(--background-50), var(--background));
      }

      jumbotron-content img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>

    <div class="img-container">
    <picture>
      <source media="(max-width: 700px)" srcset="images/heros/hero-image_2-small.jpg">
      <img src='images/heros/hero-image_2-large.jpg' alt="gambar jumbotron">
    </picture>
    </div>
    <div class="jumbotron-text">
      <h1>Restoran <span>Terbaik</span> Di Sekitar Anda</h1>
      <p>
        Jelajahi Kelezatan di Setiap Sudut Dengan <span>myResto.js</span>,
        Petualangan Kuliner Tanpa Batas!
      </p>
      <a class="explore-btn" href="#mainContent"> Jelajahi! </a>
    </div>
    `;
  }
}

customElements.define('jumbotron-content', JumbotronContent);
