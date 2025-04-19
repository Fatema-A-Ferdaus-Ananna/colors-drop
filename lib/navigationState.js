let previousPath = null;

export function setPreviousPath(path) {
  if (!previousPath) {
    previousPath = path;
  }
}

export function getPreviousPath() {
  return previousPath || "/";
}

export function clearPreviousPath() {
  previousPath = null;
}
