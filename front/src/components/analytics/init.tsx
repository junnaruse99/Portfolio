import ReactGA from 'react-ga';

const init = () : void => {

    const regex = /:\/\/([^.]+)/.exec(window.location.href);

    let subdomain = '';
    if (regex) {
        subdomain = regex[1];
    }

    console.log(subdomain);

    if (process.env.NODE_ENV == 'production' && subdomain === 'www') {
        ReactGA.initialize(`${process.env['REACT_APP_GENERAL_TRAKCING_ID_PROD']}`);
        console.log('you are in production');
    } else {
        ReactGA.initialize(`${process.env['REACT_APP_GENERAL_TRAKCING_ID_DEV']}`);
        console.log('you are in development')
    }
    ReactGA.pageview('/');
}

export default init;