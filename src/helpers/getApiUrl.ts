import { ApiUrlTemplates } from '@/lib/apiUrlBuilder';

export const getApiUrl = {
  login() {
    return ApiUrlTemplates.Login;
  },
  register() {
    return ApiUrlTemplates.Register;
  },
  refresh() {
    return ApiUrlTemplates.Refresh;
  },
  getMe() {
    return `${ApiUrlTemplates.Users}/me`;
  }
};
