/*!
    @e53e04ac/ipp5-static-builder/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5StaticBuilder {

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly srcDirectory: ValueOrGet<FileEntry>;
        readonly srcFileNames: ValueOrGet<string[]>;
        readonly thirdpartyFileNames: ValueOrGet<string[]>;
        readonly tmpDirectory: ValueOrGet<FileEntry>;
        readonly buildId: ValueOrGet<string>;
        readonly distDirectory: ValueOrGet<FileEntry>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly scriptFile: Get<FileEntry>;
        readonly scriptDirectory: Get<FileEntry>;
        readonly srcNodeModulesDirectory: Get<FileEntry>;
        readonly srcAssetsDirectory: Get<FileEntry>;
        readonly runDirectory: Get<FileEntry>;
        readonly runThirdpartyDirectory: Get<FileEntry>;
        readonly runAssetsDirectory: Get<FileEntry>;
        readonly clearDist: Get<Promise<void>>;
        readonly copyThirdpartyFiles: Get<Promise<void>>;
        readonly copyAssets: Get<Promise<void>>;
        readonly copyHtmlFiles: Get<Promise<void>>;
        readonly copyCssFiles: Get<Promise<void>>;
        readonly copyJsFiles: Get<Promise<void>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5StaticBuilder: Get<_Self>;
        readonly build: Get<Promise<void>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5StaticBuilder = Ipp5StaticBuilder.Self;

export declare const Ipp5StaticBuilder: Ipp5StaticBuilder.ConstructorWithCompanion;
