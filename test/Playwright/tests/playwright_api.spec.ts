import axios from 'axios';

async function runAPITest() {
  try {
    // Step 1: Make the API call
    const response = await axios.get('https://api.publicapis.org/entries');
    const entries = response.data.entries;

    // Step 2: Read the response and filter objectsclear
    const filteredObjects = entries.filter((entry: any) => {
      return entry.Category === 'Authentication & Authorization';
    });

    // Step 3: Count and verify the number of filtered objects
    const expectedCount = 3; // Update this with the expected count
    const actualCount = filteredObjects.length;
    if (actualCount !== expectedCount) {
      throw new Error(`Expected ${expectedCount} objects, but found ${actualCount}`);
    }

    // Step 4: Print the found objects to the console
    console.log('Found objects with Category "Authentication & Authorization":');
    console.log(filteredObjects);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runAPITest();