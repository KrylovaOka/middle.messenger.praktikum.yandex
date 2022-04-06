const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: {[key: string]: any}) {
  let result = '';
  if (typeof data == 'object') {
    result = Object.keys(data).map(key => key + '=' + data[key]).join('&');
  }  
  return result;
}

type OptionsProp = {
    headers?: {[key: string]: string},
    method?: string,
    timeout?: number,
    data?: {[key: string]: any}
}

class HTTPTransport {
    get = (url: string, options: OptionsProp = {}) => {
      url = `${url}?${queryStringify(options.data!)}`;     
      return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };
    put = (url: string, options: OptionsProp = {}) => {
      return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };
    post = (url: string, options: OptionsProp = {}) => {
      return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };
    delete = (url: string, options: OptionsProp = {}) => {
      return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };


    request = (url: string, options: OptionsProp = {method: METHODS.GET}, timeout = 5000) => {
      const {method, headers = {}, data} = options;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method!, url);
        xhr.timeout = timeout;
       
        xhr.onload = function() {
          resolve(xhr);
        };

        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
        
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;

        if (method === METHODS.GET || !data) {
          xhr.send();
        } else {
          xhr.send(JSON.stringify(data));
        }
      });
    };
}