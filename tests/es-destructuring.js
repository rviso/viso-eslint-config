const obj = {
  name: '',
  age: 12,
  email: '',
  phone: 1234567,
  address: '',
  id: 1
}


const { name, age } = obj

const { id, phone, ...rest } = obj
