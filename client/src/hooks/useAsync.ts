import { useEffect, useState, useCallback, useRef } from 'react';

export function useAsync<T>(action: () => Promise<T>, dependencies: any[]) {
  const { perform, data, loading, error } = useAsyncAction(action, dependencies);

  useEffect(() => {
    perform();
  }, dependencies);

  return { data, error, loading };
}

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export function useAsyncAction<T>(action: () => Promise<T>, dependencies: any[]) {
  const [state, setState] = useState<AsyncState<T>>({
      data: null,
      loading: false,
      error: null,
  });

  const isCancelled = useRef(false);

  const perform = useCallback(() => {
    setState({ data: null, loading: true, error: null });

    (async function() {
      try {
        const data = await action();

        if (!isCancelled.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }

      } catch (error) {
        if (!isCancelled.current) {
          setState({
            data: null,
            loading: false,
            error,
          });
          console.log(error)
        }
      }
    })();
  }, dependencies);

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);
      
  return { ...state, perform};
}