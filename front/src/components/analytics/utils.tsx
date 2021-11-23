import ReactGA from 'react-ga'

export const eventTrack = (category : string, action : string, label : string) : void => {
    console.log("GA event:", category, ":", action, ":", label);
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    })
  }