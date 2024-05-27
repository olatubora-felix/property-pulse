// Fetch Properties
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
export const fetchProperties = async () => {
  try {
    if (!apiDomain) return [];
    const response = await fetch(`${apiDomain}/properties`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
// Fetch Property by ID
export const fetchPropertyById = async (id: string) => {
  try {
    if (!apiDomain) return null;
    const response = await fetch(`${apiDomain}/properties/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
