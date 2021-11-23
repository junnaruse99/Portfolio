import ReactGA from 'react-ga';

const initGA = () : void => {
    
    const regex = /:\/\/([^.]+)/.exec(window.location.href);

    let subdomain = '';
    if (regex) {
        subdomain = regex[1];
    }

    let analyticsId = process.env['REACT_APP_GENERAL_TRAKCING_ID_PROD'];
    
    if (!analyticsId) return;

    console.log(analyticsId);

    if (process.env.NODE_ENV === 'production' && subdomain === 'www') {
        ReactGA.initialize(analyticsId);
        console.log('you are in production');
    } else {
        ReactGA.initialize(analyticsId);
        console.log('you are in development');
    }

    // Report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname);

}

export default initGA;