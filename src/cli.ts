#!/usr/bin/env node
import { Command } from "commander";
import { URL } from "url";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

console.log(__dirname);

const program = new Command();

program
  .description("Uploads files to Mailgun")
  .option("-f, --file <file>", "File to upload")
  .addHelpCommand();

program.parse();
