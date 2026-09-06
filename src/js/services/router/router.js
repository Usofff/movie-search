class Router {
    changeURL() {
        if(window.location.hash === '#favorite'){
            window.location.hash = '';
          } else {
            window.location.hash = '#favorite';
          }
    }

    init(container) {
        const location = window.location.hash;
            if(location === '#favorite') {
                container.classList.remove('hidden');
            } else {              
              container.classList.add('hidden');
            }
    }
}

export const router = new Router();