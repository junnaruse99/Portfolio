import ReactGA from 'react-ga';

const initGA = () : void => {
    
    const regex = /:\/\/([^.]+)/.exec(window.location.href);

    let subdomain = '';
    if (regex) {
        subdomain = regex[1];
    }
        
    let analyticsId = undefined;

    if (process.env.NODE_ENV === 'production' && subdomain === 'www') {
        analyticsId = process.env['REACT_APP_GENERAL_TRAKCING_ID_PROD'];
        console.log('you are in production');
    } else {
        analyticsId = process.env['REACT_APP_GENERAL_TRAKCING_ID_DEV'];
        console.log('you are in development');
    }

    if (!analyticsId) return;

    ReactGA.initialize(analyticsId);

    // Report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname);

}

export default initGA;