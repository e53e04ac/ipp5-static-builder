# ipp5-static-builder

~~~~~ sh
npm install e53e04ac/ipp5-static-builder
~~~~~

~~~~~ mjs
import { Ipp5StaticBuilder } from 'e53e04ac/ipp5-static-builder';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-static-builder"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["e53e04ac/file-entry"]);
  B2(["e53e04ac/file-entry-native"]);
  B3(["gulp"]);
  B4(["gulp-clean-css"]);
  B5(["gulp-htmlmin"]);
  B6(["gulp-uglify"]);
  B7(["e53e04ac/hold"]);
  B8(["uglify-es"]);
  C0(["@types/gulp"]);
  C1(["@types/gulp-clean-css"]);
  C2(["@types/gulp-htmlmin"]);
  C3(["@types/gulp-uglify"]);
  C4(["@types/node"]);
  C5(["@types/uglify-es"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B1 href "https://github.com/e53e04ac/file-entry";
  click B2 href "https://github.com/e53e04ac/file-entry-native";
  click B7 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-static-builder";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
    B5 --import--> A;
    B6 --import--> A;
    B7 --import--> A;
    B8 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
    C3 --import--> A;
    C4 --import--> A;
    C5 --import--> A;
  end;
~~~~~
