const generateID = () => {
    const random = Math.random().toString(32).substring(2);
    const date = Date.now().toString();
    return random + date;
};

module.exports = generateID;