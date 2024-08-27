const pool = require("../../backend/source/bbdd/connection");

const querys = [
    "CREATE TABLE users ( user_id SERIAL PRIMARY KEY AUTO_INCREMENT,  username VARCHAR(255) NOT NULL, email VARCHAR (255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, role VARCHAR(50) NOT NULL)",
    "CREATE TABLE services ( service_id SERIAL PRIMARY KEY AUTO_INCREMENT, service_name VARCHAR(255) NOT NULL UNIQUE, description TEXT)",
    "CRATE TABLE service_providers(provider_id SERIAL PRIMERY KEY AUTO_INCREMENT, user_id int not null references users(user_id), service_id INT NOT NULL REFERENCES services(servide_id), profile_description TEXT, is_active boolean default true)",
    "CREATE TABLE comments (comment_id SERIAL PRIMARY KEY AUTO_INCREMENT, provider_id INT NOT NULL REFERENCES service_providers(provider_id, provider_id INT NOT NULL REFERENCES service_providers(provider_id), comment TEXT, rating INT )",
    "CREATE TABLE reports (report_id SERIAL PRIMARY KEY AUTO_INCREMENT, provider_id INT NOT NULL REFERENCES service_providers(provider_id), user_id INT NOT NULL REFERENCES users(user_id), reason TEXT NOT NULL )",
    "CREATE TABLE favorites ( favorite_id SERIAL NOT NULL AUTO_INCREMENT, user_id INT NOT NULL REFERENCES users(user_id), provider_id INT NOT NULL REFERENCES service_providers(provider_id)"
]

async function uploadTables(){
    try {
        for (i = 0; i < querys.length; i++){
            console.log(querys[i]);
        }
    } catch (error) {
        console.log(error);
    }
}


async function main(){
    await uploadTables();
}

main().catch(err => {
    console.log("Error seed script: ", err);
})
