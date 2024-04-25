import Token from "../models/token.model";

async function postToken(token: Token) {
  const c = await Token.create({
    token: token.token,
    userId: token.userId,
    expiredAt: token.expiredAt
  })
    .catch((err: any) => {
      throw err;
    });
  return c;
}

export {
  postToken
};