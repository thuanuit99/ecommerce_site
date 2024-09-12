import * as db from '../models'
export const getAllUser = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll(
                {
                    where: {
                        id: body
                    }
                    , raw: true
                }
            )
            resolve(users)
        } catch (error) {
            reject(error)
        }
    });
}
