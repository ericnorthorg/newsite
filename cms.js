/**
 * CMS Client for Eric North Website
 * Fetches content from Google Sheets via Apps Script Web App
 */

// !!! IMPORTANT: PASTE YOUR WEB APP URL HERE !!!
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypZfRwxVCDztLWoW3x6riR4Cn1gqI-tHsLcbi2MOclTjJBmhTicaq403RzN2aqErA/exec';

const CMS = {
    // Keys for localStorage
    STORAGE_KEY: 'eric_north_site_content',
    LAST_FETCH_KEY: 'eric_north_last_fetch',

    // Cache duration (e.g., 1 hour), can be 0 for always-check
    CACHE_DURATION: 1000 * 60 * 60,

    data: null,

    init: function () {
        // 1. Try to load from local storage immediately
        this.loadFromStorage();

        // 2. Expose to global window object so other scripts can find it
        window.CMS_DATA = this.data;

        // 3. Fetch updates in background
        this.fetchUpdates();
    },

    loadFromStorage: function () {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                this.data = JSON.parse(raw);
                console.log('CMS: Loaded content from cache');
            } else {
                console.log('CMS: No cache found');
            }
        } catch (e) {
            console.error('CMS: Error loading cache', e);
        }
    },

    fetchUpdates: function () {
        if (GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) {
            console.warn('CMS: Web App URL not configured yet.');
            return;
        }

        console.log('CMS: Fetching updates...');
        fetch(GOOGLE_SCRIPT_URL)
            .then(response => response.json())
            .then(newData => {
                // Check if data actually changed could be done here, 
                // but for now we just save it.
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newData));
                localStorage.setItem(this.LAST_FETCH_KEY, Date.now());

                // Optional: Trigger a reload or event if data changed significantly?
                // For now, next page load will see new data.
                console.log('CMS: Data updated. Refresh to see changes.');
            })
            .catch(err => console.error('CMS: Fetch failed', err));
    }
};

// Initialize immediately so it runs before other scripts
CMS.init();
