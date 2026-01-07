import React from 'react';
// Date: 16/08/25
export interface ThemeState {
    isDark: boolean;
}

export interface ThemeAction {
    type: 'TOGGLE_THEME';
}

export interface ThemeContextValue {
    state: ThemeState;
    dispatch: React.Dispatch<ThemeAction>;
}

export interface ThemeContextProviderProps {
    children: React.ReactNode;

}
