function wisePerson(wiseType, whatToSay) {
	return `A wise ${wiseType} once said: "${whatToSay}".`;
}


// tests

function testWisePerson() {
  const wiseType = 'goat';
  const whatToSay = 'hello world';
  const expected = 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
  const actual = wisePerson(wiseType, whatToSay);
  // console.log(expected, actual);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  } else {
    console.log('FAILURE: `wisePerson` is not working');
  }
}

testWisePerson();