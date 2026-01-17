import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { formatLabel } from "@/lib/utils";

const API_URL = "http://ec2-98-88-224-117.compute-1.amazonaws.com";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, api) => {
    const args = api.arg;

    // Skip auth if explicitly requested
    if (args?.extra?.skipAuth) {
      return headers;
    }

    const token = Cookies.get('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  /**
   * 🔴 400 – Validation errors
   */
  if (result?.error?.status === 400) {
    const data = result.error.data;

    if (data && typeof data === 'object' && !Array.isArray(data)) {
      Object.keys(data).forEach((key) => {
        const messages = data[key];

        if (Array.isArray(messages) && messages.length > 0) {
          toast.error(`${formatLabel(key)} : ${messages[0]}`);
        } else if (typeof messages === 'string') {
          toast.error(messages);
        } else {
          toast.error(`${formatLabel(key)} is invalid`);
        }
      });
    }
  }

  /**
   * 🔒 401 – Unauthorized → refresh token
   */
  if (result?.error?.status === 401) {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) return result;

    const refreshResult = await baseQuery(
      {
        url: '/api/v1/auth/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
        extra: { skipAuth: true },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const { access, refresh } = refreshResult.data;

      Cookies.set('accessToken', access, { expires: 7 });
      Cookies.set('refreshToken', refresh, { expires: 7 });

      // 🔁 retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // ❌ refresh failed → logout
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');

      window.location.href = '/auth/login'
    }
  }

  return result;
};
