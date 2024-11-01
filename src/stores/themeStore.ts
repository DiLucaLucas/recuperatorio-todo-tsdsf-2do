import { defineStore } from "pinia";
import type { Tema } from '@/models/ThemeModel'

export const useThemeStore = defineStore({
    id: 'mode',
    state: (): Tema => ({
        darkmode: false,
        text: 'LightMode'
    }),
    actions: {
        toggleMode() {
            this.darkmode = !this.darkmode;
            this.text = this.darkmode ? 'DarkMode' : 'LightMode';
        }
    }
});