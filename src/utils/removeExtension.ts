function removeExtension(str: string, extension: string) {
    if (str.endsWith(extension)) {
        return str.slice(0, -extension.length);
    }
    return str;
}

export default removeExtension;
