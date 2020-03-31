class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let wordArray = string.split(' ')
    let newString = wordArray.forEach(word => {
      if (word != 'the' || 'a' || 'an' || 'but' || 'of' || 'and' || 'from') {
          word.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
        }
  })
console.log(newString)
}
}
