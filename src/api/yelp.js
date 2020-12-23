import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8dyqno4CJIG28wkRbqrwwVgZsnfO35_3gf0sf9idAtFu0EHGRJjsxwwsMd4-zJ7ydOeQ7QY3pmA0Jpfl__X1pWmXBzfzmqdvJGYgjkXgfIEunHK3DFoo69jv-Q7hX3Yx",
  },
});
