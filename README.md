# ipp5-static-builder

~~~~~ sh
npm install e53e04ac/ipp5-static-builder
~~~~~

~~~~~ mjs
import { Ipp5StaticBuilder } from 'ipp5-static-builder';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["file-entry-native"]);
    B_2(["gulp"]);
    B_3(["gulp-clean-css"]);
    B_4(["gulp-htmlmin"]);
    B_5(["gulp-uglify"]);
    B_6(["hold"]);
    B_7(["uglify-es"]);
  end;
  subgraph "devDependencies";
    B_8(["@types/gulp"]);
    B_9(["@types/gulp-clean-css"]);
    B_10(["@types/gulp-htmlmin"]);
    B_11(["@types/gulp-uglify"]);
    B_12(["@types/node"]);
    B_13(["@types/uglify-es"]);
    B_14(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n7e816a82855aca428d7cfe3b3600f54c0fef6c0c"]);
    C_1(["e53e04ac/file-entry-native\n4165fbf733b4db090ef59939058d9211b8ac67c9"]);
    C_6(["e53e04ac/hold\n511bb6663491dadc6e2760a04ee3750996d069f8"]);
    C_14(["e53e04ac/file-entry\nf47bb48601e4e7066cd1d17d5a5c035688cfc251"]);
  end;
  subgraph "npmjs";
    C_2(["gulp\n4.0.2"]);
    C_3(["gulp-clean-css\n4.3.0"]);
    C_4(["gulp-htmlmin\n5.0.1"]);
    C_5(["gulp-uglify\n3.0.2"]);
    C_7(["uglify-es\n3.3.9"]);
    C_8(["@types/gulp\n4.0.10"]);
    C_9(["@types/gulp-clean-css\n4.3.0"]);
    C_10(["@types/gulp-htmlmin\n1.3.32"]);
    C_11(["@types/gulp-uglify\n3.0.7"]);
    C_12(["@types/node\n18.14.2"]);
    C_13(["@types/uglify-es\n3.0.0"]);
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
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  B_12 ----> C_12;
  B_13 ----> C_13;
  B_14 ----> C_14;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/7e816a82855aca428d7cfe3b3600f54c0fef6c0c";
  click C_1 "https://github.com/e53e04ac/file-entry-native/tree/4165fbf733b4db090ef59939058d9211b8ac67c9";
  click C_2 "https://www.npmjs.com/package/gulp/v/4.0.2";
  click C_3 "https://www.npmjs.com/package/gulp-clean-css/v/4.3.0";
  click C_4 "https://www.npmjs.com/package/gulp-htmlmin/v/5.0.1";
  click C_5 "https://www.npmjs.com/package/gulp-uglify/v/3.0.2";
  click C_6 "https://github.com/e53e04ac/hold/tree/511bb6663491dadc6e2760a04ee3750996d069f8";
  click C_7 "https://www.npmjs.com/package/uglify-es/v/3.3.9";
  click C_8 "https://www.npmjs.com/package/@types/gulp/v/4.0.10";
  click C_9 "https://www.npmjs.com/package/@types/gulp-clean-css/v/4.3.0";
  click C_10 "https://www.npmjs.com/package/@types/gulp-htmlmin/v/1.3.32";
  click C_11 "https://www.npmjs.com/package/@types/gulp-uglify/v/3.0.7";
  click C_12 "https://www.npmjs.com/package/@types/node/v/18.14.2";
  click C_13 "https://www.npmjs.com/package/@types/uglify-es/v/3.0.0";
  click C_14 "https://github.com/e53e04ac/file-entry/tree/f47bb48601e4e7066cd1d17d5a5c035688cfc251";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-static-builder";
    E_0(["namespace Ipp5StaticBuilder"]);
    E_1(["type Ipp5StaticBuilder"]);
    E_2(["const Ipp5StaticBuilder"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-static-builder";
    E_0(["Ipp5StaticBuilder"]);
  end;
  M["index.mjs"]
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
