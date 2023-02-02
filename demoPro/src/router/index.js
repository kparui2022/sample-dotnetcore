import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

function guard(to, from, next) {
  if (localStorage.token) {
    next();
  } else {
    next({ name: "Login" });
    Toast.fire({ title: "Please login to access" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue')
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import('@/views/PrivacyPolicy.vue')
    },
    {
      path: '/terms-service',
      name: 'TermsService',
      component: () => import('@/views/TermsService.vue')
    },
   
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginPages/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/LoginPages/Register.vue"),
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("@/views/LoginPages/ForgotPassword.vue"),
    },
    {
      path: "/forgot-password-resend",
      name: "ForgotPasswordResend",
      component: () => import("@/views/LoginPages/ForgotPasswordResend.vue"),
    },
    {
      path: "/setting-password/:id/:code",
      name: "SettingPassword",
      component: () => import("@/views/LoginPages/SettingPassword.vue"),
    },
    {
      path: "/my-page/activity",
      name: "MyPageActivity",
      component: () => import("@/views/MyPage/MyPageActivity.vue"),
    },
    {
      path: "/my-page/message",
      name: "MyPageMessage",
      component: () => import("@/views/MyPage/MyPageMessage.vue"),
    },
    {
      path: "/my-page/message-details",
      name: "MyPageMessageDetails",
      component: () => import("@/views/MyPage/MyPageMessageDetails.vue"),
    },
    {
      path: "/my-page/communication",
      name: "MyPageCommunication",
      component: () => import("@/views/MyPage/MyPageCommunication.vue"),
    },
    {
      path: "/my-page/communication-no-data",
      name: "MyPageCommunicationNoData",
      component: () => import("@/views/MyPage/MyPageCommunicationNoData.vue"),
    },
    {
      path: "/my-page/lists",
      name: "MyPageLists",
      component: () => import("@/views/MyPage/MyPageLists.vue"),
    },
    {
      path: "/my-page/media",
      name: "MyPageMedia",
      component: () => import("@/views/MyPage/MyPageMedia.vue"),
    },
    {
      path: "/my-page/settings",
      name: "MyPageSettings",
      component: () => import("@/views/MyPage/MyPageSettings.vue"),
    },
    {
      path: "/my-page/withdrawal",
      name: "MyPageWithdrawal",
      component: () => import("@/views/MyPage/MyPageWithdrawal.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/search-result",
      name: "SearchResult",
      component: () => import("@/views/Search/SearchResult.vue"),
    },
    // {
    //   path: "/search/results-movies",
    //   name: "SearchResultsMovies",
    //   component: () => import("@/views/Search/SearchResultsMovies.vue"),
    // },
    // {
    //   path: "/search/results-webtoons",
    //   name: "SearchWebtoons",
    //   component: () => import("@/views/Search/SearchWebtoons.vue"),
    // },
    // {
    //   path: "/search/videos",
    //   name: "SearchVideos",
    //   component: () => import("@/views/Search/SearchVideos.vue"),
    // },
    // {
    //   path: "/search/people",
    //   name: "SearchPeople",
    //   component: () => import("@/views/Search/SearchPeople.vue"),
    // },
    // {
    //   path: "/search/awards",
    //   name: "SearchAwards",
    //   component: () => import("@/views/Search/SearchAwards.vue"),
    // },
    // {
    //   path: "/search/tag",
    //   name: "SearchTag",
    //   component: () => import("@/views/Search/SearchTag.vue"),
    // },
    // {
    //   path: "/search/companies",
    //   name: "SearchCompanies",
    //   component: () => import("@/views/Search/SearchCompanies.vue"),
    // },
    {
      path: "/search/tag-detail/:id?/:tagname?",
      name: "TagDetail",
      component: () => import("@/views/Search/TagDetail.vue"),
    },
    {
      path: "/people/popular",
      name: "PeoplePopular",
      component: () => import("@/views/People/PeoplePopular.vue"),
    },
    {
      path: "/people/detail-award",
      name: "PeopleDetailAward",
      component: () => import("@/views/People/PeopleDetailAward.vue"),
    },
    {
      path: "/people/details",
      name: "PeopleDetails",
      component: () => import("@/views/People/PeopleDetails.vue"),
    },
    {
      path: "/people/details-cartoonist",
      name: "PeopleDetailsCartoonist",
      component: () => import("@/views/People/PeopleDetailsCartoonist.vue"),
    },
    {
      path: "/people/details-no-data",
      name: "PeopleDetailsNoData",
      component: () => import("@/views/People/PeopleDetailsNoData.vue"),
    },
    {
      path: "/awards/detail",
      name: "AwardsDetail",
      component: () => import("@/views/Awards/AwardsDetail.vue"),
    },
    {
      path: "/awards/popular",
      name: "AwardsPopular",
      component: () => import("@/views/Awards/AwardsPopular.vue"),
    },
    {
      path: "/movies/details/:id?",
      name: "MoviesDetails",
      component: () => import("@/views/Movies/MoviesDetails.vue"),
    },
    {
      path: "/movies/popular",
      name: "MoviesPopular",
      component: () => import("@/views/Movies/MoviesPopular.vue"),
    },
    {
      path: "/movies-media/:id",
      name: "MoviesMedia",
      component: () => import("@/views/Movies/MoviesMedia.vue"),
    },
    {
      path: "/movies/movies-details-cast&crew/:id",
      name: "MoviesDetailsCast&Crew",
      component: () => import("@/views/Movies/MoviesDetailsCast&Crew.vue"),
    },
    {

      path: "/webtoons/detail",
      name: "WebtoonsDetail",
      component: () => import("@/views/Webtoons/WebtoonsDetail.vue"),
    },
    {
      path: "/webtoons/popular",
      name: "WebtoonsPopular",
      component: () => import("@/views/Webtoons/WebtoonsPopular.vue"),
    },
    {
      path: "/tvshows/popular",
      name: "TvShowsPopular",
      component: () => import("@/views/TvShows/TvShowsPopular.vue"),
    },
    {
      path: "/tvshows/details",
      name: "TvShowsDetails",
      component: () => import("@/views/TvShows/TvShowsDetails.vue"),
    },
    {
      path: "/tvshows/details-episodes",
      name: "TvShowsDetailsEpisodes",
      component: () => import("@/views/TvShows/TvShowsDetailsEpisodes.vue"),
    },
    {
      path: "/tvshows/cast&crew",
      name: "TvShowsDetailsCast&Crew",
      component: () => import("@/views/TvShows/TvShowsDetailsCast&Crew.vue"),
    },
    {
      path: "/tvshows/awards",
      name: "TvShowsDetailsAwards",
      component: () => import("@/views/TvShows/TvShowsDetailsAwards.vue"),
    },
    {
      path: "/video/popular",
      name: "VideoPopular",
      component: () => import("@/views/Video/VideoPopular.vue"),
    },
    {
      path: "/register/complete",
      name: "RegisterComplete",
      component: () => import("@/views/LoginPages/RegisterComplete.vue"),
    },
    //add new movie
    {
      path: "/AddNewMovie/AddNewMovie",
      name: "AddNewMovie",
      component: () => import("@/views/AddNewMovie/AddNewMovie.vue"),
      beforeEnter: guard,
    },
    {
      path: "/AddNewMovie/AddNewMovieForm/:id?",
      name: "AddNewMovieForm",
      component: () => import("@/views/AddNewMovie/AddNewMovieForm.vue"),
    },
    //add new tv
    {
      path: "/add-new-tv",
      name: "AddNewTV",
      component: () => import("@/views/AddNewTV/AddNewTV.vue"),
    },
    // {
    //   path: "/add-tv-details",
    //   name: "AddNewTVForm",
    //   component: () => import("@/views/AddNewTV/AddTVDetails.vue"),
    // },
  ]
})

export default router
