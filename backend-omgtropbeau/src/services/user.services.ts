import User from '../models/user.model'; // Assurez-vous que le chemin vers le modèle est correct

async function getUser(id: number) {
  const c = await User.findOne({
    where: {
      id: id
    }
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

export { getUser };