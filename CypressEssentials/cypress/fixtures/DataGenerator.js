import { faker } from '@faker-js/faker'

class DataGenerator {
        email = faker.internet.email();
        password = faker.internet.password();
        isAccept = true;    
}
export default DataGenerator