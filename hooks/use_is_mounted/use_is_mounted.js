import { useEffect, useRef } from "react";

/**
 * Returns ref of Node with value of .current property of node
 * @return { nodeRef } ref of Node
 * @example
 * const isMounted = useIsMounted();
    if (isMounted.current) {
      console.log("Component is mounted")
    } else {
      console.log("Component is unmounted")
    }
 */
export const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
  return isMounted;
};
