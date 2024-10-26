const obj = {
  name: '',
  age: 12,
  email: '',
  phone: 1234567,
  address: '',
  id: 1
}

const obj2 = {
  name: '',
  age: 12,
  email: '',
  id: 1
}

const {
  id,
  phone,
  ...rest
} = obj

