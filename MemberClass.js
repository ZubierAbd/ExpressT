class Member {
    name = ''
    email = ''
    id = ''
    constructor(name, email, id) {
        this.name = name
        this.email = email
        this.id = id
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }
}