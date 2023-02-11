# ipp5-static-builder

~~~~~ sh
npm install e53e04ac/ipp5-static-builder
~~~~~

~~~~~ mjs
import { Ipp5StaticBuilder } from 'e53e04ac/ipp5-static-builder';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/file-entry-native"]);
    B_2(["gulp"]);
    B_3(["gulp-clean-css"]);
    B_4(["gulp-htmlmin"]);
    B_5(["gulp-uglify"]);
    B_6(["e53e04ac/hold"]);
    B_7(["uglify-es"]);
  end;
  subgraph "devDependencies";
    B_8(["@types/gulp"]);
    B_9(["@types/gulp-clean-css"]);
    B_10(["@types/gulp-htmlmin"]);
    B_11(["@types/gulp-uglify"]);
    B_12(["@types/node"]);
    B_13(["@types/uglify-es"]);
    B_14(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  A ----> B_12;
  A ----> B_13;
  A ----> B_14;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_1 "https://github.com/e53e04ac/file-entry-native/tree/874175e9fe9373cd4b0ce7d96ef744f2e41898b0";
  click B_2 "https://www.npmjs.org/package/gulp/v/4.0.2";
  click B_3 "https://www.npmjs.org/package/gulp-clean-css/v/4.3.0";
  click B_4 "https://www.npmjs.org/package/gulp-htmlmin/v/5.0.1";
  click B_5 "https://www.npmjs.org/package/gulp-uglify/v/3.0.2";
  click B_6 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_7 "https://www.npmjs.org/package/uglify-es/v/3.3.9";
  click B_8 "https://www.npmjs.org/package/@types/gulp/v/4.0.10";
  click B_9 "https://www.npmjs.org/package/@types/gulp-clean-css/v/4.3.0";
  click B_10 "https://www.npmjs.org/package/@types/gulp-htmlmin/v/1.3.32";
  click B_11 "https://www.npmjs.org/package/@types/gulp-uglify/v/3.0.7";
  click B_12 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_13 "https://www.npmjs.org/package/@types/uglify-es/v/3.0.0";
  click B_14 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.mjs"])
  subgraph "node:stream/promises";
    B_0_0(["pipeline"]);
  end;
  subgraph "gulp";
    B_1_0(["default"]);
  end;
  subgraph "gulp-clean-css";
    B_2_0(["default"]);
  end;
  subgraph "gulp-htmlmin";
    B_3_0(["default"]);
  end;
  subgraph "gulp-uglify/composer.js";
    B_4_0(["default"]);
  end;
  subgraph "uglify-es";
    B_5_0(["default"]);
  end;
  subgraph "event-emitter";
    B_6_0(["EventEmitter"]);
  end;
  subgraph "file-entry-native";
    B_7_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_8_0(["hold"]);
    B_8_1(["unwrap"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
  A ----> B_8_0;
  A ----> B_8_1;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.d.ts"])
  subgraph "event-emitter";
    B_0_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    B_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_2_1;
~~~~~
