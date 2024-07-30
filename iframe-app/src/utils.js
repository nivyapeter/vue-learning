// const parentUrl = new URL(document.referrer).origin;
export const sendAnalyticsEvents = (eventLabel, eventData = {}) => {
    const message = {
        action: 'event',
        eventLabel,
        eventData
    }

    return window.parent.postMessage(message)
}


export const sendPageView = (pageTitle) => {
    const message = {
        action: 'page_view',
        page_title: pageTitle,
    }

    window.parent.postMessage(message, new URL(document.referrer).origin)
}