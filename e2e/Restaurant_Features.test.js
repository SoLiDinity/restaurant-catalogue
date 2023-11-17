const assert = require('assert');

Feature('Liking restaurant, unliking restaurant and sending customer review');

Scenario('Showing empty favorite restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurants');
  I.see('', '.restaurants');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-name a');
  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-name a');
  I.seeElement('.restaurant-name a');
  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);

  I.seeElement('.restaurant-name a');
  I.click('.restaurant-name a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurants');
  I.see('', '.restaurants');
});

Scenario('Giving user review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-name a');
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  I.waitForElement('#nameInput');
  I.seeElement('#nameInput');
  const dummyUserName = 'Anonymous';
  I.fillField('#nameInput', dummyUserName);

  I.seeElement('#customerReview');
  const dummyUserReview = 'Very Good';
  I.fillField('#customerReview', dummyUserReview);

  I.seeElement('#postBtn');
  I.click('#postBtn');

  I.refreshPage();
  I.refreshPage();

  I.waitForElement('.review-item');
  I.seeElement('.review-item');
  const latestReviewName = locate('.review-item h4').last();
  const latestReviewText = locate('.review-item p.review').last();
  const postedReviewUserName = await I.grabTextFrom(latestReviewName);
  const postedReviewText = await I.grabTextFrom(latestReviewText);

  assert.strictEqual(dummyUserName, postedReviewUserName);
  assert.strictEqual(dummyUserReview, postedReviewText);
});
