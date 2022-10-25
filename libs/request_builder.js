import request from "superagent";

import { convertToSnakeCase } from "root/libs/utils";

export const requestBuilder = (requestType, url, params = {}, headers = {}) => {
  switch (requestType) {
    case "GET":
      return request
        .get(url)
        .set(headers)
        .query(convertToSnakeCase(params))
        .ok((res) => res.status);
    case "POST":
      return request
        .post(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok((res) => res.status);
    case "PATCH":
      return request
        .patch(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok((res) => res.status);
    case "PUT":
      return request
        .put(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok((res) => res.status);
    case "DELETE":
      return request
        .delete(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok((res) => res.status);
  }
};
