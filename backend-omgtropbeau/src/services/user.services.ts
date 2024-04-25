import User from '../models/user.model'; // Assurez-vous que le chemin vers le modèle est correct

async function getUserById(id: number) {
  const c = await User.findByPk(id)
    .catch((err: any) => {
      throw err;
    });
  return c;
}

async function getUserByEmail(email: string) {
  const c = await User.findOne({
    where: {
      email: email
    }
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

async function getUsers() {
  const c = await User.findAll()
    .catch((err: any) => {
      throw err;
    });
  return c;
}

async function postUser(user: User) {
  const c = await User.create({
    username: user.username,
    email: user.email,
    password: user.password
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

async function patchUser(id: number, user: Partial<User>) {
  const c = await User.update({
    username: user.username,
    email: user.email,
    password: user.password
  }, {
    where: {
      id: id
    }
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

async function deleteUser(id: number) {
  const c = await User.destroy({
    where: {
      id: id
    }
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

export { getUserById, getUserByEmail, getUsers, postUser, patchUser, deleteUser };