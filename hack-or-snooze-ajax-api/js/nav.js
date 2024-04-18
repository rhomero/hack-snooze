"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitClick);

function navFavoritesClick(evt){
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesOnPage()
}

$navFavorites.on("click", navFavoritesClick)

function navMyStoriesClick(){
  console.debug("navMyStoriesClick");
  hidePageComponents();
  putMyStoriesOnPage();
}

$navUserStories.on("click", navMyStoriesClick)

function navUserClick(){
  console.debug("navUserClick");
  hidePageComponents();
  $profileName.text(currentUser.name);
  $profileUsername.text(currentUser.username);
  $profileCreatedOn.text(currentUser.createdAt);

  $userContainer.show();
}
$navUserProfile.on("click", navUserClick);