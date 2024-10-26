function phoneNumberDirectory(phoneNumbers) {
  return new Map(
    phoneNumbers.map((person) => {
      const [name, phone] = person.split(":");
      return [name, phone];
    })
  );
}

module.exports = phoneNumberDirectory;
