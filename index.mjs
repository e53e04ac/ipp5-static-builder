/*!
    @e53e04ac/ipp5-static-builder/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { pipeline as streamPipeline } from 'node:stream/promises';

import { default as gulp } from 'gulp';
import { default as gulpCleanCss } from 'gulp-clean-css';
import { default as gulpHtmlmin } from 'gulp-htmlmin';
import { default as gulpUglifyComposer } from 'gulp-uglify/composer.js';
import { default as uglifyEs } from 'uglify-es';

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5StaticBuilder.Constructor} */
const constructor = ((options) => {

    const _options = ({
        srcDirectory: hold(() => {
            return unwrap(options.srcDirectory);
        }),
        srcFileNames: hold(() => {
            return unwrap(options.srcFileNames);
        }),
        thirdpartyFileNames: hold(() => {
            return unwrap(options.thirdpartyFileNames);
        }),
        tmpDirectory: hold(() => {
            return unwrap(options.tmpDirectory);
        }),
        buildId: hold(() => {
            return unwrap(options.buildId);
        }),
        distDirectory: hold(() => {
            return unwrap(options.distDirectory);
        }),
    });

    /** @type {import('.').Ipp5StaticBuilder._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        scriptFile: hold(() => {
            return FileEntry(new URL(import.meta.url).pathname);
        }),
        scriptDirectory: hold(() => {
            return _self.scriptFile().parent();
        }),
        srcNodeModulesDirectory: hold(() => {
            return _options.srcDirectory().resolve('node_modules');
        }),
        srcAssetsDirectory: hold(() => {
            return _options.srcDirectory().resolve('assets');
        }),
        runDirectory: hold(() => {
            return _options.tmpDirectory().resolve('ipp5-static-builder', _options.buildId());
        }),
        contextDirectory: hold(() => {
            return _self.runDirectory().resolve('context');
        }),
        contextAppDirectory: hold(() => {
            return _self.contextDirectory().resolve('app');
        }),
        contextThirdpartyDirectory: hold(() => {
            return _self.contextAppDirectory().resolve('thirdparty');
        }),
        contextAssetsDirectory: hold(() => {
            return _self.contextAppDirectory().resolve('assets');
        }),
        clearDist: hold(async () => {
            await _options.distDirectory().deleteDirectory();
        }),
        copyThirdpartyFiles: hold(async () => {
            for (const name of _options.thirdpartyFileNames()) {
                const src = _self.srcNodeModulesDirectory().resolve(name);
                const dest = _self.contextThirdpartyDirectory().resolve(name);
                await src.copyFile(dest);
            }
        }),
        copyAssets: hold(async () => {
            const src = _self.srcAssetsDirectory();
            const dest = _self.contextAssetsDirectory();
            await src.copyDirectory(dest);
        }),
        copyHtmlFiles: hold(async () => {
            await streamPipeline(
                gulp.src(_options.srcFileNames().filter((name) => {
                    return name.endsWith('.html');
                }), {
                    cwd: _options.srcDirectory().path(),
                    base: _options.srcDirectory().path(),
                }),
                gulpHtmlmin({
                    caseSensitive: false,
                    collapseBooleanAttributes: false,
                    collapseInlineTagWhitespace: false,
                    collapseWhitespace: true,
                    conservativeCollapse: false,
                    continueOnParseError: false,
                    customAttrAssign: [],
                    customAttrCollapse: undefined,
                    customAttrSurround: [],
                    customEventAttributes: [/^on[a-z]{3,}$/],
                    decodeEntities: false,
                    html5: true,
                    ignoreCustomComments: [/^!/],
                    ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/],
                    includeAutoGeneratedTags: false,
                    keepClosingSlash: false,
                    maxLineLength: Infinity,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    preserveLineBreaks: false,
                    preventAttributesEscaping: false,
                    processConditionalComments: false,
                    processScripts: [],
                    quoteCharacter: '"',
                    removeAttributeQuotes: false,
                    removeComments: true,
                    removeEmptyAttributes: false,
                    removeEmptyElements: false,
                    removeOptionalTags: false,
                    removeRedundantAttributes: false,
                    removeScriptTypeAttributes: false,
                    removeStyleLinkTypeAttributes: false,
                    removeTagWhitespace: false,
                    sortAttributes: false,
                    sortClassName: false,
                    trimCustomFragments: false,
                    useShortDoctype: false,
                }),
                gulp.dest(_self.contextAppDirectory().path()),
            );
        }),
        copyCssFiles: hold(async () => {
            await streamPipeline(
                gulp.src(_options.srcFileNames().filter((name) => {
                    return name.endsWith('.css');
                }), {
                    cwd: _options.srcDirectory().path(),
                    base: _options.srcDirectory().path(),
                }),
                gulpCleanCss({
                    format: {
                        breaks: {
                            afterAtRule: false,
                            afterBlockBegins: false,
                            afterBlockEnds: false,
                            afterComment: false,
                            afterProperty: false,
                            afterRuleBegins: false,
                            afterRuleEnds: false,
                            beforeBlockEnds: false,
                            betweenSelectors: false,
                        },
                        breakWith: '\n',
                        indentBy: 0,
                        indentWith: 'space',
                        spaces: {
                            aroundSelectorRelation: false,
                            beforeBlockBegins: false,
                            beforeValue: false,
                        },
                        wrapAt: false,
                        semicolonAfterLastProperty: false,
                    },
                }),
                gulp.dest(_self.contextAppDirectory().path()),
            );
        }),
        copyJsFiles: hold(async () => {
            await streamPipeline(
                gulp.src(_options.srcFileNames().filter((name) => {
                    return name.endsWith('.js');
                }), {
                    cwd: _options.srcDirectory().path(),
                    base: _options.srcDirectory().path(),
                }),
                gulpUglifyComposer(uglifyEs, console)({
                    output: {
                        comments: /^!/,
                    },
                }),
                gulp.dest(_self.contextAppDirectory().path()),
            );
        }),
    });

    /** @type {import('.').Ipp5StaticBuilder.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5StaticBuilder: (() => {
            return _self;
        }),
        build: hold(async () => {
            await _self.clearDist();
            await _self.copyThirdpartyFiles();
            await _self.copyAssets();
            await _self.copyHtmlFiles();
            await _self.copyCssFiles();
            await _self.copyJsFiles();
            await _self.contextAppDirectory().copyDirectory(_options.distDirectory());
        }),
    });

    return self;

});

/** @type {import('.').Ipp5StaticBuilder.Companion} */
const companion = ({});

/** @type {import('.').Ipp5StaticBuilder.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5StaticBuilder };
