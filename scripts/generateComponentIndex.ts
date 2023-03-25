// generateComponentIndex.ts
import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve(process.cwd(), 'src/components');
const indexPath = path.join(componentsDir, 'index.ts');

function getComponentFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  return files.filter((file) => file.endsWith('.vue'));
}

function generateIndexFileContent(files: string[]): string {
  const imports = files.map(
    (file) =>
      `export { default as ${path.basename(file, '.vue')} } from './${file}';`
  );
  return imports.join('\n').concat('\n');
}

function generateComponentIndex(): void {
  const componentFiles = getComponentFiles(componentsDir);
  const indexContent = generateIndexFileContent(componentFiles);
  fs.writeFileSync(indexPath, indexContent);
}

generateComponentIndex();
