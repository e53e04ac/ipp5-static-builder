# ipp5-static-builder

~~~~~ sh
npm install e53e04ac/ipp5-static-builder
~~~~~

~~~~~ mjs
import { Ipp5StaticBuilder } from 'e53e04ac/ipp5-static-builder';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-static-builder"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/file-entry"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["gulp"]);
    B_4(["gulp-clean-css"]);
    B_5(["gulp-htmlmin"]);
    B_6(["gulp-uglify"]);
    B_7(["e53e04ac/hold"]);
    B_8(["uglify-es"]);
  end;
  subgraph "devDependencies";
    B_9(["@types/gulp"]);
    B_10(["@types/gulp-clean-css"]);
    B_11(["@types/gulp-htmlmin"]);
    B_12(["@types/gulp-uglify"]);
    B_13(["@types/node"]);
    B_14(["@types/uglify-es"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  A --reference--> B_8;
  A --reference--> B_9;
  A --reference--> B_10;
  A --reference--> B_11;
  A --reference--> B_12;
  A --reference--> B_13;
  A --reference--> B_14;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_1 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/f3bab6d7be77c1e3b2791f82201dd2195639be66";
  click B_3 "https://www.npmjs.org/package/gulp/v/4.0.2";
  click B_4 "https://www.npmjs.org/package/gulp-clean-css/v/4.3.0";
  click B_5 "https://www.npmjs.org/package/gulp-htmlmin/v/5.0.1";
  click B_6 "https://www.npmjs.org/package/gulp-uglify/v/3.0.2";
  click B_7 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_8 "https://www.npmjs.org/package/uglify-es/v/3.3.9";
  click B_9 "https://www.npmjs.org/package/@types/gulp/v/4.0.10";
  click B_10 "https://www.npmjs.org/package/@types/gulp-clean-css/v/4.3.0";
  click B_11 "https://www.npmjs.org/package/@types/gulp-htmlmin/v/1.3.32";
  click B_12 "https://www.npmjs.org/package/@types/gulp-uglify/v/3.0.7";
  click B_13 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_14 "https://www.npmjs.org/package/@types/uglify-es/v/3.0.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-static-builder"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:stream/promises"
    D0(["pipeline"]);
  end;
  subgraph "gulp"
    D1(["default"]);
  end;
  subgraph "gulp-clean-css"
    D2(["default"]);
  end;
  subgraph "gulp-htmlmin"
    D3(["default"]);
  end;
  subgraph "gulp-uglify/composer.js"
    D4(["default"]);
  end;
  subgraph "uglify-es"
    D5(["default"]);
  end;
  subgraph "event-emitter"
    D6(["EventEmitter"]);
  end;
  subgraph "file-entry-native"
    D7(["FileEntry"]);
  end;
  subgraph "hold"
    D8(["hold"]);
    D9(["unwrap"]);
    D11(["Get"]);
    D12(["ValueOrGet"]);
  end;
  subgraph "file-entry"
    D10(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C0;
  D9 --import--> C0;
  D6 --import--> C1;
  D10 --import--> C1;
  D11 --import--> C1;
  D12 --import--> C1;
~~~~~
