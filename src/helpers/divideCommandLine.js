export const divideCommandLine = (commandLine) => {
  const commandLineSplited = commandLine.split("--");
  const commandName = commandLineSplited[0];
  const operation = commandLineSplited[1];
  return [commandName.trim(), operation];
};
