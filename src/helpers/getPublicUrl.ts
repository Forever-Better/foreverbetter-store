import { UrlTemplates } from '@/lib/urlBuilder';

export const getPublicUrl = {
  main() {
    return UrlTemplates.Main;
  },
  login() {
    return UrlTemplates.Login;
  },
  register() {
    return UrlTemplates.Register;
  },
  cart() {
    return UrlTemplates.Cart;
  },
  profile(userId: number) {
    return `${UrlTemplates.Users}/${userId}`;
  },
  favorites() {
    return UrlTemplates.Favorites;
  },
  category(subs: string[]) {
    return subs ? `${UrlTemplates.Category}/${subs.join('/').toLowerCase()}` : UrlTemplates.Category;
  },
  product(id: number) {
    return `${UrlTemplates.Product}/${id}`;
  }
};
