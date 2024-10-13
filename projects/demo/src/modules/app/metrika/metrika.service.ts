import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import type {Provider} from '@angular/core';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import type {Params} from '@angular/router';
import {TUI_IS_E2E, tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

declare global {
    interface Window {
        ym(
            id: number | string,
            type: string,
            url: string,
            options?: Partial<HitOptions>,
        ): void;
    }
}

interface HitOptions {
    referer?: string;
    params?: Params;
    title?: string;
}

interface YaMetrikaOptions {
    id: number | string;
    debug: boolean;
}

const YA_METRIKA_DEFAULT_OPTIONS: YaMetrikaOptions = {
    id: '',
    debug: false,
};

export const YA_METRIKA_OPTIONS = tuiCreateToken<YaMetrikaOptions>(
    YA_METRIKA_DEFAULT_OPTIONS,
);

export function metrikaOptionsProvider(options: Partial<YaMetrikaOptions>): Provider {
    return tuiProvideOptions(YA_METRIKA_OPTIONS, options, YA_METRIKA_DEFAULT_OPTIONS);
}

@Injectable({
    providedIn: 'root',
})
export class YaMetrikaService {
    private readonly options = inject(YA_METRIKA_OPTIONS);
    private readonly doc = inject(DOCUMENT);

    constructor() {
        if (
            this.options.debug ||
            (isPlatformBrowser(inject(PLATFORM_ID)) && !ngDevMode && !inject(TUI_IS_E2E))
        ) {
            const script = this.doc.createElement('script');

            script.async = true;
            // https://yandex.ru/support/metrica/code/counter-initialize.html
            script.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(${this.options.id}, "init", {clickmap: false, webvisor: false});`;

            this.doc.body.appendChild(script);
        }
    }

    public hit(url: string, options: HitOptions = {}): void {
        this.doc.defaultView?.ym?.(this.options.id, 'hit', url, options);
    }
}
