import chalk from "chalk";

export function heading(text) {
    return chalk.bold.blue(`|==${text}==|`);
}