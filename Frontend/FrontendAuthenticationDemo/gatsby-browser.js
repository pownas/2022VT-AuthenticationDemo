/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import AuthContextProvider from './src/State/Context/AuthContextProvider';
import AppThemeProvider from './src/State/Context/ThemeContextProvider';

export const wrapPageElement = ({ element }) => {
    return (
        <AppThemeProvider>
            <AuthContextProvider>
                {element}
            </AuthContextProvider>
        </AppThemeProvider>
    );
};