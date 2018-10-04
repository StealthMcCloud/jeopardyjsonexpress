module.export = async function (uri) {
    const axios = require("axios");
    const response = await axios.get(uri);

    return response.data;
}