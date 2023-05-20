import { ApiUrlTemplates } from '@/lib/apiUrlBuilder';

export const getApiUrl = {
  login() {
    return ApiUrlTemplates.Login;
  },
  signup() {
    return ApiUrlTemplates.Signup;
  },
  refresh() {
    return ApiUrlTemplates.Refresh;
  },
  getMe() {
    return `${ApiUrlTemplates.Users}/me`;
  }
};
