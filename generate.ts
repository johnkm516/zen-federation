import * as path from 'path';
import { ZenGenerator } from './tools/zen-generator';
import { readFileSync } from 'fs';


async function main() {
  const subgraphsConfig = JSON.parse(readFileSync('./subgraphs.json').toString());

  
  for (let subgraph in subgraphsConfig.subgraphs) {
    const subgraphAPIPath = subgraphsConfig.subgraphs[subgraph]; 

    const generator = new ZenGenerator({
      palConfig: require(`./${subgraphAPIPath}/pal.js`),
      apiOutPath: path.join(__dirname, `${subgraphAPIPath}/src/app/graphql`),
      caslOutFile: path.join(__dirname, `${subgraphAPIPath}/src/app/auth/casl/generated.ts`),
      frontend: {
        outPath: path.join(__dirname, 'libs/graphql/src/lib'),
      },
      subgraphName: subgraph
    });
  
    await generator.run();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
