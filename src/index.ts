import RTFParser from "./rtf-parser";
import RTFInterpreter from "./rtf-interpreter";
import RTFDocument from "./rtf-document";

export function parseString(str, cb) {
  parse(cb).end(str);
}

export function parseStream(stream, cb) {
  stream.pipe(parse(cb));
}

export function parse(cb) {
  let errored = false;
  const errorHandler = (err) => {
    if (errored) return;
    errored = true;
    parser.unpipe(interpreter);
    interpreter.end();
    cb(err);
  };
  const doc = new RTFDocument();
  const parser = new RTFParser();
  parser.once("error", errorHandler);
  const interpreter = new RTFInterpreter(doc);
  interpreter.on("error", errorHandler);
  interpreter.on("finish", () => {
    if (!errored) cb(null, doc);
  });
  parser.pipe(interpreter);
  return parser;
}
