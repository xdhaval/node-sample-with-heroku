module.exports = {
    HOST: "ec2-23-23-164-251.compute-1.amazonaws.com",
    USER: "tjdodqcnkyllyc",
    PASSWORD: "4b1920e9c1977c56d7d38410c14a20e487bca74c25f468b17d1e36d7b50d7d74",
    DB: "d2shehi9vmovvt",
    dialect: "postgres",
    uri: 'postgres://tjdodqcnkyllyc:4b1920e9c1977c56d7d38410c14a20e487bca74c25f468b17d1e36d7b50d7d74@ec2-23-23-164-251.compute-1.amazonaws.com:5432/d2shehi9vmovvt',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};