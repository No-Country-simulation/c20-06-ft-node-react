const fetchAllData = async (api) => {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return { data, status: 200 }
  } catch (error) {
    return { error: error.message, status: 500 }
  }
}

export default fetchAllData