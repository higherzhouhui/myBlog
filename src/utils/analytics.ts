import ReactGA from 'react-ga';


export function initializeAnalytics() {
    ReactGA.initialize('G-VRSW5KX18L'); // Replace G-XXXXXXXXXX with your tracking ID
    console.log('ReactGA is init')
}

export function trackPageView(page: any) {
    ReactGA.pageview(page);
    console.log('pageview is exec')
}
