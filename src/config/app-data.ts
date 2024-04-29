const cdn_url =
  'https://res.cloudinary.com/cashtoken/image/upload/h_500/v1538842572/cashtoken/';

export const DEFAULT_APP_DATA = {
  landing_page_banner: [
    {
      image_link: `${cdn_url}banner-1.jpg`,
      link_url: '#',
    },
  ],
  footer_social_links: [
    {
      link_url: 'https://twitter.com/cashtoken',
      name: 'Twitter',
      icon: 'fa fa-twitter-square',
    },
    {
      link_url: 'https://www.instagram.com/cashtoken/',
      name: 'Instagram',
      icon: 'fa fa-instagram',
    },
    {
      link_url: 'https://plus.google.com/',
      name: 'Google +',
      icon: 'fa fa-google-plus-square',
    },
    {
      link_url: 'https://in.pinterest.com/cashtoken/',
      name: 'Pinterest',
      icon: 'fa fa-pinterest-square',
    },
    {
      link_url: 'https://www.facebook.com/cashtoken/',
      name: 'Facebook',
      icon: 'fa fa-facebook-square',
    },
    {
      link_url: 'https://www.youtube.com/',
      name: 'Youtube',
      icon: 'fa fa-youtube-square',
    },
  ],
  contact_info: {
    contact_no: '888-888-xxx',
    copyright: `Copyright © ${new Date().getFullYear()} CashToken, Inc.`,
  },
};
