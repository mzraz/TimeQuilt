export async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function postData(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function putData(url, body) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

export async function deleteData(url, body) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}
