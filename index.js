class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let wordArray = string.split(' ')
    console.log(wordArray)
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

}
