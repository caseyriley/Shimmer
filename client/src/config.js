// export const imageUrl = process.env.REACT_APP_IMAGE_URL || 'http://localhost:8000';
// export const imageUrl = process.env.REACT_APP_IMAGE_URL || 'https://shimmer.herokuapp.com';
export const imageUrl = process.env.NODE_ENV === "production" ? 'https://shimmer.herokuapp.com' : 'http://localhost:8000';
// export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;
                                                           
