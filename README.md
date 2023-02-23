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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/faf256d4d2350ffa0af1fed794236faa4f0740a1";
  click B_1 "https://github.com/e53e04ac/file-entry-native/tree/9f6065504bf14be690aee1bb9beb982b21eef0d2";
  click B_2 "https://www.npmjs.com/package/gulp/v/4.0.2";
  click B_3 "https://www.npmjs.com/package/gulp-clean-css/v/4.3.0";
  click B_4 "https://www.npmjs.com/package/gulp-htmlmin/v/5.0.1";
  click B_5 "https://www.npmjs.com/package/gulp-uglify/v/3.0.2";
  click B_6 "https://github.com/e53e04ac/hold/tree/443c2e801bbe20409c761994a91fa88fb6044602";
  click B_7 "https://www.npmjs.com/package/uglify-es/v/3.3.9";
  click B_8 "https://www.npmjs.com/package/@types/gulp/v/4.0.10";
  click B_9 "https://www.npmjs.com/package/@types/gulp-clean-css/v/4.3.0";
  click B_10 "https://www.npmjs.com/package/@types/gulp-htmlmin/v/1.3.32";
  click B_11 "https://www.npmjs.com/package/@types/gulp-uglify/v/3.0.7";
  click B_12 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click B_13 "https://www.npmjs.com/package/@types/uglify-es/v/3.0.0";
  click B_14 "https://github.com/e53e04ac/file-entry/tree/69045717124e824d6d83b98b6866fcafe8f295ef";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-static-builder";
    E_0(["Ipp5StaticBuilder"]);
  end;
  M(["index.mjs"])
  subgraph "node:stream/promises";
    I_0_0(["pipeline"]);
  end;
  subgraph "gulp";
    I_1_0(["default"]);
  end;
  subgraph "gulp-clean-css";
    I_2_0(["default"]);
  end;
  subgraph "gulp-htmlmin";
    I_3_0(["default"]);
  end;
  subgraph "gulp-uglify/composer.js";
    I_4_0(["default"]);
  end;
  subgraph "uglify-es";
    I_5_0(["default"]);
  end;
  subgraph "event-emitter";
    I_6_0(["EventEmitter"]);
  end;
  subgraph "file-entry-native";
    I_7_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_8_0(["hold"]);
    I_8_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_8_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-static-builder";
    E_0(["namespace Ipp5StaticBuilder"]);
    E_1(["type Ipp5StaticBuilder"]);
    E_2(["const Ipp5StaticBuilder"]);
  end;
  M(["index.d.ts"])
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
