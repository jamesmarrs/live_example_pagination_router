import React from "react";

import PropTypes from "prop-types";

import { useIsMounted } from "root/hooks/use_is_mounted";
import { requestBuilder } from "root/libs/request_builder";

export function useRequestBuilder(requestType, url) {
  const isMounted = useIsMounted();
  const [isFetching, setIsFetching] = React.useState(false);

  const theRequest = React.useCallback(
    async function (params, headers) {
      !!isMounted && setIsFetching(true);
      const res = await requestBuilder(requestType, url, params, headers).then(
        (res) => {
          return res;
        }
      );
      !!isMounted && setIsFetching(false);
      return res;
    },
    [requestType, url, isMounted]
  );

  return [theRequest, isFetching];
}

useRequestBuilder.propTypes = {
  requestType: PropTypes.oneOf(["GET", "POST", "PATCH", "PUT", "DELETE"]),
  url: PropTypes.string.isRequired,
};
