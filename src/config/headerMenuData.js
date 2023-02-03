import i18n from '@/config/i18n';
const { t } = i18n.global;
i18n.global.locale = 'en';

const headerMenuData = [
    {
        label: "Movies",
        label_ko: "영화 산업",
        key_name: "Movies",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "Popular",
            label_ko: "인기 있는",
            key_name: "Popular",
            access_type: "none",
            page_link: "/movies/popular"
          },
          {
            label: "Newest",
            label_ko: "최신",
            key_name: "Newest",
            access_type: "none",
          },
          {
            label: "Upcoming",
            label_ko: "다가오는",
            key_name: "Upcoming",
            access_type: "none",
          },
          {
            label: "Top Rated",
            label_ko: "최고 등급",
            key_name: "TopRated",
            access_type: "none",
          },
        ],
      },
      {
        label: "TV Shows",
        label_ko: "TV 프로그램",
        key_name: "TVShows",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "Popular",
            label_ko: "인기 있는",
            key_name: "Popular",
            access_type: "none",
            page_link : "/tvshows/popular"
          },
          {
            label: "Newest",
            label_ko: "최신",
            key_name: "Newest",
            access_type: "none",
          },
          {
            label: "Upcoming",
            label_ko: "다가오는",
            key_name: "Upcoming",
            access_type: "none",
          },
          {
            label: "Top Rated",
            label_ko: "최고 등급",
            key_name: "TopRated",
            access_type: "none",
          },
        ],
      },
      {
        label: "Webtoons",
        label_ko: "웹툰",
        key_name: "Webtoons",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "Popular",
            label_ko: "인기 있는",
            key_name: "Popular",
            access_type: "none",
            page_link : "/webtoons/popular"
          },
          {
            label: "Newest",
            label_ko: "최신",
            key_name: "Newest",
            access_type: "none",
          },
          {
            label: "On Going",
            label_ko: "다가오는",
            key_name: "Ongoing",
            access_type: "none",
          },
          {
            label: "Completed",
            label_ko: "최고 등급",
            key_name: "Completed",
            access_type: "none",
          },
        ],
      },
      {
        label: "Videos",
        label_ko: "비디오",
        key_name: "Videos",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "Popular",
            label_ko: "인기 있는",
            key_name: "Popular",
            access_type: "none",
            page_link : "/video/popular"
          },
          {
            label: "Newest",
            label_ko: "최신",
            key_name: "Newest",
            access_type: "none",
          },
          {
            label: "Trailer",
            label_ko: "트레일러",
            key_name: "Trailer",
            access_type: "none",
          },
        ],
      },
      {
        label: "People",
        label_ko: "사람들",
        key_name: "People",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "Popular",
            label_ko: "인기 있는",
            key_name: "Popular",
            access_type: "none",
            page_link : "/people/popular"
          },
        ],
      },
      {
        label: "Awards",
        label_ko: "수상",
        key_name: "Awards",
        access_type: "read",
        status: false,
        subMenu: [
          {
            label: "All Events",
            label_ko: "모든 이벤트",
            key_name: "AllEvents",
            access_type: "none",
            page_link : "/awards/popular"
          },
        ],
      },
]


export default headerMenuData;