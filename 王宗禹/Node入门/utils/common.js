Buffer.prototype.split =
  Buffer.prototype.split ||
  function(sign) {
    const buffer = [];
    let n = 0;
    let cur = 0;
    while ((n = this.indexOf(sign, cur)) !== -1) {
      buffer.push(this.slice(cur, n));
      cur = n + sign.length;
    }
    buffer.push(this.slice(cur));
    return buffer;
  };
