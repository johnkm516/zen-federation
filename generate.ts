import * as path from 'path';

import { ZenGenerator } from './tools/zen-generator';
import subgraphs from './subgraphs.json'

async function main() {
  
  for (let subgraph in subgraphs) {
    const subgraphAPIPath = subgraphs[subgraph]; 
    const generator = new ZenGenerator({
      palConfig: require(`./${subgraphAPIPath}/pal.js`),
      apiOutPath: path.join(__dirname, `${subgraphAPIPath}/src/app/graphql`),
      caslOutFile: path.join(__dirname, `${subgraphAPIPath}/src/app/auth/casl/generated.ts`),
      frontend: {
        outPath: path.join(__dirname, 'libs/graphql/src/lib'),
      },
    });
  
    await generator.run();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
