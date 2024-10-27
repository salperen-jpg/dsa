class HashTable {
  constructor(capacity = 10) {
    this.bucket = [];
    this.capacity = capacity;
  }

  _hash(key, capacity) {
    const stringTypeKey = `${key}${typeof key}`;
    let hash = 0;
    for (let i = 0; i < stringTypeKey.length; i++) {
      hash += stringTypeKey.charCodeAt(i);
    }
    return hash % capacity;
  }

  set(key, value) {
    const index = this._hash(key, this.capacity);
    if (this.bucket[index] === undefined) {
      this.bucket[index] = [{ key, value }];
    } else {
      let isInserted = false;

      for (let i = 0; i < this.bucket[index]; i++) {
        if (this.bucket[index][i].key === key) {
          this.bucket[index][i].key = value;
          isInserted = true;
        }
      }
      if (isInserted === false) {
        this.bucket[index].push({ key, value });
      }
    }
  }

  get(key) {
    const index = this._hash(key, this.capacity);
    if (this.bucket[index] === undefined) return undefined;
    for (let i = 0; i < this.bucket[index].length; i++) {
      if ((this.bucket[index][i].key = key)) return this.bucket[index][i].value;
    }
  }

  print() {
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== undefined) {
        console.log(`The index ${i} has ${JSON.stringify(this.bucket[i])}`);
      }
    }
  }

  size() {
    let amount = 0;
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== undefined) {
        let innerIndex = 0;
        while (this.bucket[i][innerIndex]) {
          amount++;
          innerIndex++;
        }
      }
    }
    console.log(amount);
    return amount;
  }
}

const hash = new HashTable(5);
hash.set("alp", 1234567889);
hash.set("lap", 987);
hash.set("ilker", 1234567889);
hash.set("ece", 1234567889);
hash.size();
hash.print();
module.exports = HashTable;
