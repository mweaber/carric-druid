import axios from "axios";

export default {
    getItems: function() {
        return axios.get("/api/items")
    },
    saveItem: function() {
        return axios.post("/api/items");
    }
};