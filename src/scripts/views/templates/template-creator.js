import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => `
    <div class="restaurant-item" tabindex="0">
        <picture>
            <source media="(max-width: 700px)" data-srcset="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="gambar restoran ${restaurant.name}">
        </picture>
        <div class="restaurant-detail">
            <div class="restaurant-name-place">
                <h4 class="restaurant-name" aria-label="nama restoran ${restaurant.name}"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h4>
                <p aria-label="lokasi di ${restaurant.city}"><i class="fa-solid fa-location-dot"></i>${restaurant.city}</p>
            </div>
            <h5 class="rating" aria-label="rating bintang ${restaurant.rating} dari 5"><i class="fa-solid fa-star"></i> ${restaurant.rating}</h5>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="gambar restoran ${restaurant.name}">
        <div class="restaurant-main-detail">
            <div class="restaurant-info-detail">
                <article>
                    <h1>${restaurant.name}</h1>
                    <p class="location"><i class="fa-solid fa-location-dot"></i> ${restaurant.address}, ${restaurant.city}</p>
                </article>
                <aside><p class="rating"><i class="fa-solid fa-star"></i>${restaurant.rating}</p></aside>
            </div>
            <div class="tag">
                ${restaurant.categories.map((category) => `<p>${category.name}</p>`).join('')}
            </div>
        </div>
        <div class="restaurant-detail-content">
            <br>
            <div class="description">
                <h3><i class="fa-solid fa-circle-info"></i> Deskripsi</h3>
                <p>${restaurant.description}</p>
            </div>
            <br>
            <div class="menus">
                <div class="foods">
                    <h3><i class="fa-solid fa-burger"></i> Makanan</h3>
                    <ul>
                        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="drinks">
                    <h3><i class="fa-solid fa-beer-mug-empty"></i> Minuman</h3>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <br>
            <form>
                <h3><i class="fa-solid fa-comment-dots"></i> Berikan Ulasan</h3>
                <input type="text" id="nameInput" placeholder="Masukkan nama" maxlength="24" required></input>
                <textarea id="customerReview" placeholder="Tuliskan ulasan..." required></textarea>
                <button id="postBtn">Kirim</button>
            </form>
            <br>
            <div class=reviews>
                <h3><i class="fa-solid fa-comments"></i> Ulasan</h3>
                ${restaurant.customerReviews.map((review) => `
                <div class="review-item">
                    <i class="fa-solid fa-user"></i>
                    <article class="review-content">
                        <h4>${review.name}</h4>
                        <p class="date">${review.date}</p>
                        <p class="review">${review.review}</p>
                    </article>
                </div>
            `).join('')}
            </div>
        </div>
`;

const createErrorMessageTemplate = (message) => `
    <h2 aria-label="proses gagal" style="position: absolute; align-self: center; margin-top: 7.5rem; display: flex; justify-content: center; align-items: center; color: white; text-align: center; padding: 1rem;">${message}</h2>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="simpan restoran" id="likeButton" class="favorite">
     <i class="fa-regular fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="batal simpan restoran" id="likeButton" class="favorite">
    <i class="fa-solid fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createErrorMessageTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
