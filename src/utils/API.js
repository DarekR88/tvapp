import axios from "axios";
const BASEURL = "http://api.tvmaze.com/";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};