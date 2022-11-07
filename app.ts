function getFullName(userEntity: { firstname: string, surname: string}): string{
  return `${userEntity.firstname} ${userEntity.surname}`;
}

 const user = {
  firstname: 'Nikita',
  surname: 'Demidov',
  city: 'Minsk',
  age: 33,
  skills: {
    dev: true,
    devops: true,
    
  }
 }
 console.log(getFullName(user));