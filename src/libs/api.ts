import axios from 'axios';

const API_ORIGIN =
  'https://lostarkwebpage-proxy.herokuapp.com/https://developer-lostark.game.onstove.com/';

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA4MTMifQ.Nxp6WoOFXrwIrWAxo6GApJg4SQpukWM9_1UxZON3Dus_1d7_GgVLwuKoLy9QIxYy2ZMwyWMQ0Nw5WZ2ojKYn4XAj9bu5tVmGmpq6HpETBdZ_Ytshdvay4Zhe1noVGnIxBzBU13PeZmGik2BMk1b8PoCwduHujT5njyYcVjGEzEpDf_roNSPE8RnpPMl0qQ0RJ3DfYFZcqFaaiYfbvJAblh6w9vfNFft4oB7wicNDUZFRNNC2YrtOLzAHUU7rI24OzyurPdfGT-YDA53v3jcOIZ72T25d6lBxJs3nhcgsRIZDXlQc8UDEj70SagI6mdRKLxAdaD1w7a_t--70QTCFww';

axios.defaults.baseURL = `${API_ORIGIN}`;

axios.interceptors.request.use((req) => {
  return req;
});

axios.interceptors.response.use((res) => {
  return res;
});

type BasicApiResponse<T> = {
  data: T;
  config: {
    status: number;
  };
};

export function requestSecureGet<T>(
  url: string,
  header: object,
): Promise<BasicApiResponse<T>> {
  return axios
    .get(url, {
      headers: {
        accept: 'application/json',
        authorization: `bearer ${TOKEN}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicApiResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicApiResponse<T>;
    });
}
