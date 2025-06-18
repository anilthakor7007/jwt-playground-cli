import chalk from 'chalk';

export function printSection(title: string, data: object) {
  console.log(chalk.green.bold(`\n--- ${title} ---`));
  console.log(chalk.whiteBright(JSON.stringify(data, null, 2)));
}
