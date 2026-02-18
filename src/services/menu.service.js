import axios from 'axios';

const MENU_API_URL = `${import.meta.env.VITE_API_URL}/menus`;

const iconMapping = {
    'mdi-home': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    'mdi-ticket': 'M15 5v2a3 3 0 003 3h2v2a3 3 0 00-3 3v2a3 3 0 003 3h2v2a3 3 0 00-3 3v2a3 3 0 00-3 3H5a3 3 0 00-3-3v-2a3 3 0 003-3v-2a3 3 0 00-3-3V7a3 3 0 003-3h2a3 3 0 003 3v2a3 3 0 003-3z', // Approximate ticket icon
    'mdi-account': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    'mdi-cog': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    'default': 'M4 6h16M4 12h16M4 18h16' // Menu icon as fallback
};

export const getMenus = async () => {
    try {
        const response = await axios.get(MENU_API_URL);
        return response.data.map(item => ({
            ...item,
            iconPath: iconMapping[item.icon] || iconMapping['default']
        }));
    } catch (error) {
        console.error('Failed to fetch menus:', error);
        return [];
    }
};
